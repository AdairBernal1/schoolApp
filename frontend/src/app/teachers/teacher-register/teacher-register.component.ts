import { Component, OnInit } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';
import { GET_TEACHERS } from '../teachers.component';

const ADD_TEACHER = gql`
mutation MyMutation($first_name: String = "", $last_name: String = "", $hire_date: String = "", $status: String = "", $fire_date: String = "") {
  insert_teacher_one(object: {first_name: $first_name, last_name: $last_name, hire_date: $hire_date, status: $status, fire_date: $fire_date}) {
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
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent implements OnInit {
  firstName: String = ""
  lastName: String = ""
  hireDate: String = ""
  status: String = ""
  fireDate: String = ""

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  addTeacher() {
    this.apollo
      .mutate({
        mutation: ADD_TEACHER,
        variables: {
          first_name : this.firstName,
          last_name : this.lastName,
          hire_date : this.hireDate,
          status : this.status,
          fire_date: this.fireDate
        },
        update: (cache, { data }: any) => {
          const allTeachers: any = cache.readQuery({
            query: GET_TEACHERS,
          });

          const newTeacher = data.insert_teacher_one.returning[0];
          cache.writeQuery({
            query: GET_TEACHERS,
            data: { todos: [newTeacher, ...allTeachers.todos] },
          });
        },
      })
      .subscribe(
        ({ data }) => {
          console.log('got data ', data);
        },
        (error) => {
          console.log('there was an error sending the query', error);
        }
      );
  }
}
