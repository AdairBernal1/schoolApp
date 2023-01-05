import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apollo, gql } from 'apollo-angular';
import { Group } from 'graphql/generated';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

export const GET_GROUPS = gql`
  query MyQuery {
    group {
      current_teacher
      day
      group_level
      id
      previous_teachers
      time
    }
  }
`;

export const DELETE_GROUP = gql`
mutation MyMutation($id: Int = 10) {
  delete_group_by_pk(id: $id) {
    day
    time
    current_teacher
  }
}
`;

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss'],
})
export class GruposComponent implements OnInit {
  allgroups: Group[] = [];
  idTodelete: Number;

  constructor(private apollo: Apollo, public dialogo: MatDialog) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_GROUPS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allgroups = data.group;
      });
  }
  displayedColumns: string[] = [
    'ID',
    'Dia',
    'Hora',
    'TeacherActual',
    'TeacherAnterior',
    'NivelGrupo',
    'Accion'
  ];

  deleteGroup(id:Number) {
    this.idTodelete = id;
    this.dialogo
      .open(ConfirmationDialogComponent, {
        data: `¿Estas seguro de eliminar este grupo?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.delete()
          alert("Grupo Eliminado");
        }
      });
  }
  
  delete() {
    this.apollo
      .mutate<{ delete_group_by_pk: Group }>({
        mutation: DELETE_GROUP,
        variables: {
          id: this.idTodelete,
        },
        update: (store, { data }) => {
          if (data?.delete_group_by_pk) {
            var allData = store.readQuery<{ allGroups: Group[] }>({
              query: GET_GROUPS,
            });

            if (allData && allData?.allGroups?.length > 0) {
              var newData: Group[] = [...allData.allGroups];
              newData = newData.filter((_) => _.id !== data.delete_group_by_pk.id);
              newData.unshift(data.delete_group_by_pk);

              store.writeQuery<{ allGroups: Group[] }>({
                query: GET_GROUPS,
                data: { allGroups: newData },
              });
            }
          }
        },
      })
      .subscribe(({ data }) => {

      });
  }

}
