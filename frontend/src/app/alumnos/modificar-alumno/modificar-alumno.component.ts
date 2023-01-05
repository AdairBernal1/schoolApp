import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Student } from 'graphql/generated';
import { GET_STUDENTS } from '../alumnos.component';

const UPDATE_STUDENT = gql`
  mutation updateStudentMutation(
    $id: Int = 10
    $date_ins: String = ""
    $first_name: String = ""
    $group: Int = 10
    $last_name: String = ""
    $last_pay_date: String = ""
    $matricula: String = ""
    $next_pay_date: String = ""
    $payment_status: String = ""
    $phone: String = ""
    $student_level: String = ""
  ) {
    update_student_by_pk(
      pk_columns: { id: $id }
      _set: {
        date_ins: $date_ins
        first_name: $first_name
        group: $group
        last_name: $last_name
        last_pay_date: $last_pay_date
        matricula: $matricula
        next_pay_date: $next_pay_date
        payment_status: $payment_status
        phone: $phone
        student_level: $student_level
      }
    ) {
      id
    }
  }
`;

export const GET_STUDENT_BY_ID = gql`

query MyQuery($studentFilter: Int!) {
  student_by_pk(id:$studentFilter) {
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
  }
}
`;


@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.scss'],
})
export class ModificarAlumnoComponent implements OnInit {
  dateIns: String = '';
  firstName: String = '';
  group: Number = 1;
  lastName: String = '';
  matricula: String = '';
  phone: String = '';
  last_pay_date: String = '';
  next_pay_date: String = '';
  payment_status: String = '';
  student_level: String = '';
  allStudents: Student;
  id: Number = 1;

  constructor(private apollo: Apollo, private route:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var id = Number(params.get('id'));
      this.getById(id);
    });
  }

  getById(id:number){
    this.apollo
    .watchQuery<any>({
      query: GET_STUDENT_BY_ID,
      variables:{
        studentFilter: id
      }
    })
    .valueChanges.subscribe(({ data, loading }) => {
      console.log(loading);
      var studentByID = data.student_by_pk;
      this.id = studentByID.id;
      this.firstName = studentByID.first_name;
      this.lastName = studentByID.last_name;
      this.matricula = studentByID.matricula;
      this.dateIns = studentByID.date_ins;
      this.group = studentByID.group;
      this.last_pay_date = studentByID.last_pay_date;
      this.next_pay_date = studentByID.next_pay_date;
      this.payment_status = studentByID.payment_status;
      this.phone = studentByID.phone;
      this.student_level = studentByID.student_level;
    });
  }

  updateStudent() {
    this.apollo
    .mutate<{ update_student_by_pk: Student }>({
        mutation: UPDATE_STUDENT,
        variables: {
          id: this.id,
          date_ins: this.dateIns,
          first_name: this.firstName,
          last_name: this.lastName,
          matricula: this.matricula,
          phone: this.phone,
          group: this.group,
          next_pay_date: this.next_pay_date,
          student_level: this.student_level,
          last_pay_date: this.last_pay_date,
          payment_status: this.payment_status
        },
        update: (store, { data }) => {
          if (data?.update_student_by_pk) {
            var allData = store.readQuery<{ allStudents: Student[] }>({
              query: GET_STUDENTS,
            });

            if (allData && allData?.allStudents?.length > 0) {
              var newData: Student[] = [...allData.allStudents];
              newData = newData.filter((_) => _.id !== data.update_student_by_pk.id);
              newData.unshift(data.update_student_by_pk);

              store.writeQuery<{ allStudents: Student[] }>({
                query: GET_STUDENTS,
                data: { allStudents: newData },
              });
            }
          }
        },
      })
      .subscribe(({ data }) => {
        this.router.navigate(['/dashboard/alumnos']);
      });
  }
}
