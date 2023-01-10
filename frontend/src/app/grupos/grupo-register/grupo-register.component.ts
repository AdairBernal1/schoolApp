import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Teacher } from 'graphql/generated';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { GET_GROUPS } from 'src/app/grupos/grupos.component';
import { GET_TEACHERS } from 'src/app/teachers/teachers.component';

const ADD_GROUP = gql`
  mutation MyMutation(
    $day: String = ""
    $time: String = ""
    $current_teacher: String = ""
    $group_level: String = ""
    $previous_teachers: String = ""
  ) {
    insert_group_one(
      object: {
        day: $day
        time: $time
        current_teacher: $current_teacher
        group_level: $group_level
        previous_teachers: $previous_teachers
      }
    ) {
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
  selector: 'app-grupo-register',
  templateUrl: './grupo-register.component.html',
  styleUrls: ['./grupo-register.component.scss'],
})
export class GrupoRegisterComponent implements OnInit {
  current_teacher: String = "";
  day: String = '';
  group_level: String = '';
  previous_teachers: String = "";
  time: String = '';
  levelOptions: String[] = [
    'Basico',
    'Basico-Intermedio',
    'Intermedio',
    'Avanzado',
  ];
  allTeachers: Teacher[] = [];
  teacherOptions: String[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_TEACHERS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allTeachers = data.teacher;
        this.teacherOptions = this.allTeachers.map((obj) => String(obj.id));
        this.teacherOptions.push("-")
      });
  }

  addGroup() {
    this.apollo
      .mutate({
        mutation: ADD_GROUP,
        variables: {
          current_teacher: this.current_teacher,
          day: this.day,
          group_level: this.group_level,
          previous_teachers: this.previous_teachers,
          time: this.time,
        },
        update: (cache, { data }: any) => {
          const allGroups: any = cache.readQuery({
            query: GET_GROUPS,
          });

          const newGroup = data.insert_group_one.returning[0];
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
      window.location.reload();
  }
}
