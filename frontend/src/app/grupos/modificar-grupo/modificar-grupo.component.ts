import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Group } from 'graphql/generated';
import { GET_GROUPS } from '../grupos.component';

const UPDATE_GROUP = gql`
  mutation MyMutation(
    $id: Int = 10
    $current_teacher: Int = 10
    $day: String = ""
    $group_level: String = ""
    $previous_teachers: Int = 10
    $time: String = ""
  ) {
    update_group_by_pk(
      pk_columns: { id: $id }
      _set: {
        current_teacher: $current_teacher
        day: $day
        group_level: $group_level
        previous_teachers: $previous_teachers
        time: $time
      }
    ) {
      id
    }
  }
`;

const GET_GROUP_BY_ID = gql`
  query MyQuery($id: Int = 10) {
    group_by_pk(id: $id) {
      id
      day
      time
      current_teacher
      group_level
      previous_teachers
    }
  }
`;

@Component({
  selector: 'app-modificar-grupo',
  templateUrl: './modificar-grupo.component.html',
  styleUrls: ['./modificar-grupo.component.scss'],
})
export class ModificarGrupoComponent implements OnInit {
  current_teacher: Number = 10;
  day: String = '';
  group_level: String = '';
  levelOptions: String[] = ["Basico", "Basico-Intermedio", "Intermedio", "Avanzado"]
  previous_teachers: Number = 10;
  time: String = '';
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
      query: GET_GROUP_BY_ID,
      variables:{
        id: id
      }
    })
    .valueChanges.subscribe(({ data, loading }) => {
      console.log(loading);
      var groupByID = data.group_by_pk;
      this.current_teacher = groupByID.current_teacher;
      this.day = groupByID.day;
      this.group_level = groupByID.group_level;
      this.previous_teachers = groupByID.previous_teachers;
      this.time = groupByID.time;
    });
  }

  updateGroup() {
    this.apollo
    .mutate<{ update_group_by_pk: Group }>({
        mutation: UPDATE_GROUP,
        variables: {
          id : this.id,
          current_teacher: this.current_teacher,
          day: this.day,
          group_level: this.group_level,
          previous_teachers: this.previous_teachers,
          time: this.time
        },
        update: (store, { data }) => {
          if (data?.update_group_by_pk) {
            var allData = store.readQuery<{ allStudents: Group[] }>({
              query: GET_GROUPS,
            });

            if (allData && allData?.allStudents?.length > 0) {
              var newData: Group[] = [...allData.allStudents];
              newData = newData.filter((_) => _.id !== data.update_group_by_pk.id);
              newData.unshift(data.update_group_by_pk);

              store.writeQuery<{ allStudents: Group[] }>({
                query: GET_GROUPS,
                data: { allStudents: newData },
              });
            }
          }
        },
      })
      .subscribe(({ data }) => {
        this.router.navigate(['/dashboard/groups']);
      });
  }
}
