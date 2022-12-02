import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GET_STUDENTS } from '../../alumnos.component';

const ADD_STUDENT = gql`
  mutation insertStudentMutation(
    $date_ins: String = ""
    $first_name: String = ""
    $group: Int = 1
    $last_name: String = ""
    $matricula: String = ""
    $phone: String = ""
    $tuition_type: String = ""
  ) {
    insert_students_one(
      object: {
        date_ins: $date_ins
        first_name: $first_name
        last_name: $last_name
        matricula: $matricula
        phone: $phone
        tuition_type: $tuition_type
        group: $group
      }
    ) {
      student_id
      first_name
    }
  }
`;

@Component({
  selector: 'app-alumno-register',
  templateUrl: './alumno-register.component.html',
  styleUrls: ['./alumno-register.component.scss']
})

export class AlumnoRegisterComponent implements OnInit {
  dateIns: String = ""
  firstName: String = ""
  group: Number = 1
  lastName: String = ""
  matricula: String = ""
  phone: String = ""
  tuitionType: String = ""

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

addStudent() {
  this.apollo
    .mutate({
      mutation: ADD_STUDENT,
      variables: {
        date_ins : this.dateIns,
        first_name : this.firstName,
        last_name : this.lastName,
        matricula : this.matricula,
        phone : this.phone,
        tuition_type : this.tuitionType,
        group: this.group
      },
      update: (cache, {data} : any) => {      
        const allStudents : any = cache.readQuery({
          query: GET_STUDENTS
        });

      const newStudent = data.insert_students_one.returning[0];
        cache.writeQuery({
          query: GET_STUDENTS,
          data: {todos: [newStudent, ...allStudents.todos]}
        });
      },

      }).subscribe(({ data }) => {
        console.log('got data ', data);
      },(error) => {
        console.log('there was an error sending the query', error);
      });
  }

}
