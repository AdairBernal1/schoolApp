import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GET_GROUPS } from 'src/app/grupos/grupos.component'

const ADD_GROUP = gql`
  mutation insertGroupMutation(
    $current_teacher: Int = 10
    $day: String = ""
    $group_level: String = ""
    $previous_teachers: Int = 10
    $time: String = ""
  ) {
    insert_group_one(
      object: {
        current_teacher: $current_teacher
        day: $day
        group_level: $group_level
        previous_teachers: $previous_teachers
        time: $time
      }
    ) {
      id
      day
      time
    }
  }
`;

@Component({
  selector: 'app-grupo-register',
  templateUrl: './grupo-register.component.html',
  styleUrls: ['./grupo-register.component.scss'],
})
export class GrupoRegisterComponent implements OnInit {
  current_teacher: Number = 10
  day: String = ""
  group_level: String = ""
  previous_teachers: Number = 10
  time: String = ""

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  addGroup() {
    this.apollo
      .mutate({
        mutation: ADD_GROUP,
        variables: {
          current_teacher: this.current_teacher,
          day: this.day,
          group_level: this.group_level,
          previous_teachers: this.previous_teachers,
          time: this.time
        },
        update: (cache, { data }: any) => {
          const allGroups: any = cache.readQuery({
            query: GET_GROUPS,
          });

          const newGroup = data.insert_groups_one.returning[0];
          cache.writeQuery({
            query: GET_GROUPS,
            data: { todos: [newGroup, ...allGroups.todos] },
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
