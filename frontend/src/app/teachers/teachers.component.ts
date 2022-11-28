import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Teachers } from 'graphql/generated';

const GET_Teachers = gql`
  query MyQuery {
    teachers {
      id
      first_name
      last_name
      hire_date
    }
  }
`;

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  allTeachers: Teachers[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_Teachers,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allTeachers = data.teachers;
      });
  }
  displayedColumns: string[] = [
    'ID',
    'Nombre',
    'Apellido',
    'FechaContrato',
    'Accion',
  ];
}
