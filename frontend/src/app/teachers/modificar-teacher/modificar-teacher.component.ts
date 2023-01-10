import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Teacher } from 'graphql/generated';
import { GET_TEACHERS } from '../teachers.component';

const UPDATE_TEACHER = gql`
  mutation MyMutation(
    $id: Int = 10
    $first_name: String = ""
    $last_name: String = ""
    $hire_date: String = ""
    $status: String = ""
    $fire_date: String = ""
  ) {
    update_teacher_by_pk(
      pk_columns: { id: $id }
      _set: {
        first_name: $first_name
        last_name: $last_name
        hire_date: $hire_date
        status: $status
        fire_date: $fire_date
      }
    ) {
      id
      first_name
      last_name
      hire_date
      status
      fire_date
    }
  }
`;

const GET_TEACHER_BY_ID = gql`
  query MyQuery($id: Int = 10) {
    teacher_by_pk(id: $id) {
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
  selector: 'app-modificar-teacher',
  templateUrl: './modificar-teacher.component.html',
  styleUrls: ['./modificar-teacher.component.scss'],
})
export class ModificarTeacherComponent implements OnInit {
  id: Number = 10
  firstName: String = ""
  lastName: String = ""
  hireDate: String = ""
  status: String = ""
  statusOptions: String[] = ["Activo", "Inactivo"]
  fireDate: String = ""

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var id = Number(params.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.apollo
      .watchQuery<any>({
        query: GET_TEACHER_BY_ID,
        variables: {
          id: id,
        },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        var teacherByID = data.teacher_by_pk;
        this.id = teacherByID.id
        this.firstName = teacherByID.first_name
        this.lastName = teacherByID.last_name
        this.hireDate = teacherByID.hire_date
        this.status = teacherByID.status
        this.fireDate = teacherByID.fire_date
      });
  }

  updateTeacher() {
    this.apollo
      .mutate<{ update_teacher_by_pk: Teacher }>({
        mutation: UPDATE_TEACHER,
        variables: {
          id: this.id,
          first_name: this.firstName,
          last_name: this.lastName,
          hire_date: this.hireDate,
          status: this.status,
          fire_date: this.fireDate
        },
        update: (store, { data }) => {
          if (data?.update_teacher_by_pk) {
            var allData = store.readQuery<{ allStudents: Teacher[] }>({
              query: GET_TEACHERS,
            });

            if (allData && allData?.allStudents?.length > 0) {
              var newData: Teacher[] = [...allData.allStudents];
              newData = newData.filter(
                (_) => _.id !== data.update_teacher_by_pk.id
              );
              newData.unshift(data.update_teacher_by_pk);

              store.writeQuery<{ allStudents: Teacher[] }>({
                query: GET_TEACHERS,
                data: { allStudents: newData },
              });
            }
          }
        },
      })
      .subscribe(({ data }) => {
        this.router.navigate(['/dashboard/teachers']);
      });
      window.location.reload();
  }
}
