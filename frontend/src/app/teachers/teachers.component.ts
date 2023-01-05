import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apollo, gql } from 'apollo-angular';
import { Teacher } from 'graphql/generated';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

export const GET_TEACHERS = gql`
  query MyQuery {
    teacher {
      id
      first_name
      last_name
      hire_date
      status
      fire_date
    }
  }
`;

export const DELETE_TEACHER = gql`
mutation MyMutation($id: Int = 10) {
  delete_teacher_by_pk(id: $id) {
    id
    first_name
    last_name
    hire_date
    status
    fire_date
  }
}
`;

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  allTeachers: Teacher[] = [];
  idTodelete: Number;

  constructor(private apollo: Apollo, public dialogo: MatDialog) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_TEACHERS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allTeachers = data.teacher;
      });
  }
  displayedColumns: string[] = [
    'ID',
    'Nombre',
    'Apellido',
    'FechaContrato',
    'Estado',
    'FechaBaja',
    'Accion',
  ];
  
  deleteTeacher(id:Number) {
    this.idTodelete = id;
    this.dialogo
      .open(ConfirmationDialogComponent, {
        data: `¿Estas seguro de eliminar este maestro?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.delete()
          alert("Maestro eliminado");
        }
      });
  }
  
  delete() {
    this.apollo
      .mutate<{ delete_teacher_by_pk: Teacher }>({
        mutation: DELETE_TEACHER,
        variables: {
          id: this.idTodelete,
        },
        update: (store, { data }) => {
          if (data?.delete_teacher_by_pk) {
            var allData = store.readQuery<{ allTeachers: Teacher[] }>({
              query: GET_TEACHERS,
            });

            if (allData && allData?.allTeachers?.length > 0) {
              var newData: Teacher[] = [...allData.allTeachers];
              newData = newData.filter((_) => _.id !== data.delete_teacher_by_pk.id);
              newData.unshift(data.delete_teacher_by_pk);

              store.writeQuery<{ allTeachers: Teacher[] }>({
                query: GET_TEACHERS,
                data: { allTeachers: newData },
              });
            }
          }
        },
      })
      .subscribe(({ data }) => {

      });
  }

}
