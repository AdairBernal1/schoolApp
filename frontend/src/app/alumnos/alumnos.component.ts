import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Student } from 'graphql/generated';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

export const GET_STUDENTS = gql`
  query getStudents {
    student {
    date_ins
    first_name
    group
    id
    last_name
    last_pay_date
    matricula
    next_pay_date
    payment_status
    phone
    student_level
    initial_pay_date
    pay_amount
    status
    }
  }
`;

export const DELETE_STUDENT = gql`
mutation MyMutation($id: Int!) {
  delete_student_by_pk(id: $id) {
    id
    first_name
    last_name
  }
}
`;

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  showStudentTable = true;
  allStudents: Student[] = [];
  population: Number = 0;
  idTodelete: Number;

  constructor(private apollo: Apollo, public dialogo: MatDialog) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_STUDENTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allStudents = data.student;
        this.population = this.allStudents.length
      });

  }

  displayedColumns: string[] = [
    'ID',
    'Matricula',
    'Status',
    'Nombre',
    'Apellido',
    'Telefono',
    'Grupo',
    'FechaInscripcion',
    'PayAmount',
    'PaymentStatus',
    'InitialPaymentDate',
    'LastPaymentDate',
    'NextPaymentDate',
    'StudentLevel',
    'Accion',
  ];
  

  deleteStudent(id:Number) {
    this.idTodelete = id;
    this.dialogo
      .open(ConfirmationDialogComponent, {
        data: `¿Estas seguro de eliminar a este alumno?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.delete()
          alert("Baja Confirmada");
        }
      });
  }
  
  delete() {
    this.apollo
      .mutate<{ delete_student_by_pk: Student }>({
        mutation: DELETE_STUDENT,
        variables: {
          id: this.idTodelete,
        },
        update: (store, { data }) => {
          if (data?.delete_student_by_pk) {
            var allData = store.readQuery<{ allStudents: Student[] }>({
              query: GET_STUDENTS,
            });

            if (allData && allData?.allStudents?.length > 0) {
              var newData: Student[] = [...allData.allStudents];
              newData = newData.filter((_) => _.id !== data.delete_student_by_pk.id);
              newData.unshift(data.delete_student_by_pk);

              store.writeQuery<{ allStudents: Student[] }>({
                query: GET_STUDENTS,
                data: { allStudents: newData },
              });
            }
          }
        },
      })
      .subscribe(({ data }) => {

      });
  }

}
