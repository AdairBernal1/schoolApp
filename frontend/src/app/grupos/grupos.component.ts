import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Group } from 'graphql/generated';

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

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss'],
})
export class GruposComponent implements OnInit {
  allgroups: Group[] = [];

  constructor(private apollo: Apollo) {}

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
}
