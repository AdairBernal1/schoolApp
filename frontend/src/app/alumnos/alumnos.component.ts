import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Students } from 'graphql/generated';

const GET_STUDENTS = gql`
  query getStudents {
    students {
      tuition_type
      student_id
      phone
      matricula
      last_name
      date_ins
      first_name
      group
    }
  }
`;

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  allStudents: Students[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_STUDENTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allStudents = data.students;
      });
  }
  displayedColumns: string[] = ['ID', 'Matricula', 'Nombre', 'Apellido', 'Telefono', 'Grupo', 'FechaInscripcion', 'TipoPago', 'Accion'];
}
