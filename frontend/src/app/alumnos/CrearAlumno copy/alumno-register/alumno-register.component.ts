import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GET_STUDENTS } from '../../alumnos.component';

const ADD_STUDENT = gql`
  mutation insertStudentMutation(
    $date_ins: String = ""
    $first_name: String = ""
    $group: Int = 10
    $last_name: String = ""
    $matricula: String = ""
    $status: String = ""
    $pay_amount: numeric = ""
    $initial_pay_date: String = ""
    $next_pay_date: String = ""
    $phone: String = ""
    $student_level: String = ""
  ) {
    insert_student_one(
      object: {
        date_ins: $date_ins
        first_name: $first_name
        group: $group
        last_name: $last_name
        matricula: $matricula
        status: $status
        initial_pay_date: $initial_pay_date
        next_pay_date: $next_pay_date
        pay_amount: $pay_amount
        payment_status: "Acreditado"
        phone: $phone
        student_level: $student_level
      }
    ) {
      id
    }
  }
`;

@Component({
  selector: 'app-alumno-register',
  templateUrl: './alumno-register.component.html',
  styleUrls: ['./alumno-register.component.scss'],
})
export class AlumnoRegisterComponent implements OnInit {
  dateIns: String = '';
  firstName: String = '';
  group: Number = 1;
  lastName: String = '';
  matricula: String = '';
  status: String = '';
  statusOptions: String[] = ["Activo", "Baja Temporal", "Graduado"]
  phone: Number = 0;
  payAmount: Number = 0;
  initial_pay_date: String = '';
  next_pay_date: String = '';
  student_level: String = '';
  levelOptions: String[] = ["Basico", "Basico-Intermedio", "Intermedio", "Avanzado"]

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  addStudent() {
    this.apollo
      .mutate({
        mutation: ADD_STUDENT,
        variables: {
          date_ins: this.dateIns,
          first_name: this.firstName,
          last_name: this.lastName,
          matricula: this.matricula,
          status: this.status,
          phone: String(this.phone),
          group: this.group,
          pay_amount: this.payAmount,
          initial_pay_date: this.initial_pay_date,
          next_pay_date: this.next_pay_date,
          student_level: this.student_level
        },
        update: (cache, { data }: any) => {
          const allStudents: any = cache.readQuery({
            query: GET_STUDENTS,
          });

          const newStudent = data.insert_students_one.returning[0];
          cache.writeQuery({
            query: GET_STUDENTS,
            data: { todos: [newStudent, ...allStudents.todos] },
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
