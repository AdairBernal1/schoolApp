import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Groups } from 'graphql/generated';

const GET_groups = gql`
  query MyQuery {
    groups {
      day
      id
      teacher
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
  allgroups: Groups[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_groups,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allgroups = data.groups;
      });
  }
  displayedColumns: string[] = [
    'ID',
    'Dia',
    'Hora',
    'Teacher',
    'Accion'
  ];
}
