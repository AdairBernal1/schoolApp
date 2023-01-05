import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "group" */
export type Group = {
  __typename?: 'group';
  current_teacher: Scalars['String'];
  day: Scalars['String'];
  group_level: Scalars['String'];
  id: Scalars['Int'];
  previous_teachers?: Maybe<Scalars['String']>;
  time: Scalars['String'];
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  avg?: Maybe<Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
  stddev?: Maybe<Group_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Sum_Fields>;
  var_pop?: Maybe<Group_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Var_Samp_Fields>;
  variance?: Maybe<Group_Variance_Fields>;
};


/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Group_Avg_Fields = {
  __typename?: 'group_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Bool_Exp>>;
  _not?: InputMaybe<Group_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Bool_Exp>>;
  current_teacher?: InputMaybe<String_Comparison_Exp>;
  day?: InputMaybe<String_Comparison_Exp>;
  group_level?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  previous_teachers?: InputMaybe<String_Comparison_Exp>;
  time?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupPkey = 'group_pkey'
}

/** input type for incrementing numeric columns in table "group" */
export type Group_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  current_teacher?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  group_level?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  previous_teachers?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  current_teacher?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  group_level?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  previous_teachers?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  current_teacher?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  group_level?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  previous_teachers?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  __typename?: 'group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** on_conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns?: Array<Group_Update_Column>;
  where?: InputMaybe<Group_Bool_Exp>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  current_teacher?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  group_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  previous_teachers?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  CurrentTeacher = 'current_teacher',
  /** column name */
  Day = 'day',
  /** column name */
  GroupLevel = 'group_level',
  /** column name */
  Id = 'id',
  /** column name */
  PreviousTeachers = 'previous_teachers',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  current_teacher?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  group_level?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  previous_teachers?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Group_Stddev_Fields = {
  __typename?: 'group_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Group_Stddev_Pop_Fields = {
  __typename?: 'group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Group_Stddev_Samp_Fields = {
  __typename?: 'group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "group" */
export type Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Group_Stream_Cursor_Value_Input = {
  current_teacher?: InputMaybe<Scalars['String']>;
  day?: InputMaybe<Scalars['String']>;
  group_level?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  previous_teachers?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Group_Sum_Fields = {
  __typename?: 'group_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  CurrentTeacher = 'current_teacher',
  /** column name */
  Day = 'day',
  /** column name */
  GroupLevel = 'group_level',
  /** column name */
  Id = 'id',
  /** column name */
  PreviousTeachers = 'previous_teachers',
  /** column name */
  Time = 'time'
}

export type Group_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Group_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Group_Var_Pop_Fields = {
  __typename?: 'group_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Group_Var_Samp_Fields = {
  __typename?: 'group_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Group_Variance_Fields = {
  __typename?: 'group_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "student" */
  delete_student?: Maybe<Student_Mutation_Response>;
  /** delete single row from the table: "student" */
  delete_student_by_pk?: Maybe<Student>;
  /** delete data from the table: "teacher" */
  delete_teacher?: Maybe<Teacher_Mutation_Response>;
  /** delete single row from the table: "teacher" */
  delete_teacher_by_pk?: Maybe<Teacher>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "student" */
  insert_student?: Maybe<Student_Mutation_Response>;
  /** insert a single row into the table: "student" */
  insert_student_one?: Maybe<Student>;
  /** insert data into the table: "teacher" */
  insert_teacher?: Maybe<Teacher_Mutation_Response>;
  /** insert a single row into the table: "teacher" */
  insert_teacher_one?: Maybe<Teacher>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update multiples rows of table: "group" */
  update_group_many?: Maybe<Array<Maybe<Group_Mutation_Response>>>;
  /** update data of the table: "student" */
  update_student?: Maybe<Student_Mutation_Response>;
  /** update single row of the table: "student" */
  update_student_by_pk?: Maybe<Student>;
  /** update multiples rows of table: "student" */
  update_student_many?: Maybe<Array<Maybe<Student_Mutation_Response>>>;
  /** update data of the table: "teacher" */
  update_teacher?: Maybe<Teacher_Mutation_Response>;
  /** update single row of the table: "teacher" */
  update_teacher_by_pk?: Maybe<Teacher>;
  /** update multiples rows of table: "teacher" */
  update_teacher_many?: Maybe<Array<Maybe<Teacher_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StudentArgs = {
  where: Student_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Student_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TeacherArgs = {
  where: Teacher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teacher_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StudentArgs = {
  objects: Array<Student_Insert_Input>;
  on_conflict?: InputMaybe<Student_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Student_OneArgs = {
  object: Student_Insert_Input;
  on_conflict?: InputMaybe<Student_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeacherArgs = {
  objects: Array<Teacher_Insert_Input>;
  on_conflict?: InputMaybe<Teacher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teacher_OneArgs = {
  object: Teacher_Insert_Input;
  on_conflict?: InputMaybe<Teacher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _inc?: InputMaybe<Group_Inc_Input>;
  _set?: InputMaybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _inc?: InputMaybe<Group_Inc_Input>;
  _set?: InputMaybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_ManyArgs = {
  updates: Array<Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StudentArgs = {
  _inc?: InputMaybe<Student_Inc_Input>;
  _set?: InputMaybe<Student_Set_Input>;
  where: Student_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Student_By_PkArgs = {
  _inc?: InputMaybe<Student_Inc_Input>;
  _set?: InputMaybe<Student_Set_Input>;
  pk_columns: Student_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Student_ManyArgs = {
  updates: Array<Student_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeacherArgs = {
  _inc?: InputMaybe<Teacher_Inc_Input>;
  _set?: InputMaybe<Teacher_Set_Input>;
  where: Teacher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teacher_By_PkArgs = {
  _inc?: InputMaybe<Teacher_Inc_Input>;
  _set?: InputMaybe<Teacher_Set_Input>;
  pk_columns: Teacher_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teacher_ManyArgs = {
  updates: Array<Teacher_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacher_aggregate: Teacher_Aggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacher_by_pk?: Maybe<Teacher>;
};


export type Query_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStudentArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Query_RootStudent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Query_RootStudent_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTeacherArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Query_RootTeacher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Query_RootTeacher_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "student" */
export type Student = {
  __typename?: 'student';
  date_ins: Scalars['String'];
  first_name: Scalars['String'];
  group: Scalars['Int'];
  id: Scalars['Int'];
  initial_pay_date: Scalars['String'];
  last_name: Scalars['String'];
  last_pay_date: Scalars['String'];
  matricula: Scalars['String'];
  next_pay_date: Scalars['String'];
  pay_amount: Scalars['numeric'];
  payment_status: Scalars['String'];
  phone: Scalars['String'];
  status: Scalars['String'];
  student_level: Scalars['String'];
};

/** aggregated selection of "student" */
export type Student_Aggregate = {
  __typename?: 'student_aggregate';
  aggregate?: Maybe<Student_Aggregate_Fields>;
  nodes: Array<Student>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_Fields = {
  __typename?: 'student_aggregate_fields';
  avg?: Maybe<Student_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Student_Max_Fields>;
  min?: Maybe<Student_Min_Fields>;
  stddev?: Maybe<Student_Stddev_Fields>;
  stddev_pop?: Maybe<Student_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Student_Stddev_Samp_Fields>;
  sum?: Maybe<Student_Sum_Fields>;
  var_pop?: Maybe<Student_Var_Pop_Fields>;
  var_samp?: Maybe<Student_Var_Samp_Fields>;
  variance?: Maybe<Student_Variance_Fields>;
};


/** aggregate fields of "student" */
export type Student_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Student_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Student_Avg_Fields = {
  __typename?: 'student_avg_fields';
  group?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pay_amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'. */
export type Student_Bool_Exp = {
  _and?: InputMaybe<Array<Student_Bool_Exp>>;
  _not?: InputMaybe<Student_Bool_Exp>;
  _or?: InputMaybe<Array<Student_Bool_Exp>>;
  date_ins?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  group?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initial_pay_date?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_pay_date?: InputMaybe<String_Comparison_Exp>;
  matricula?: InputMaybe<String_Comparison_Exp>;
  next_pay_date?: InputMaybe<String_Comparison_Exp>;
  pay_amount?: InputMaybe<Numeric_Comparison_Exp>;
  payment_status?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  student_level?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "student" */
export enum Student_Constraint {
  /** unique or primary key constraint on columns "matricula" */
  StudentMatriculaKey = 'student_matricula_key',
  /** unique or primary key constraint on columns "id" */
  StudentPkey = 'student_pkey'
}

/** input type for incrementing numeric columns in table "student" */
export type Student_Inc_Input = {
  group?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  pay_amount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "student" */
export type Student_Insert_Input = {
  date_ins?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  initial_pay_date?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_pay_date?: InputMaybe<Scalars['String']>;
  matricula?: InputMaybe<Scalars['String']>;
  next_pay_date?: InputMaybe<Scalars['String']>;
  pay_amount?: InputMaybe<Scalars['numeric']>;
  payment_status?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  student_level?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Student_Max_Fields = {
  __typename?: 'student_max_fields';
  date_ins?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  initial_pay_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_pay_date?: Maybe<Scalars['String']>;
  matricula?: Maybe<Scalars['String']>;
  next_pay_date?: Maybe<Scalars['String']>;
  pay_amount?: Maybe<Scalars['numeric']>;
  payment_status?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  student_level?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Student_Min_Fields = {
  __typename?: 'student_min_fields';
  date_ins?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  initial_pay_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_pay_date?: Maybe<Scalars['String']>;
  matricula?: Maybe<Scalars['String']>;
  next_pay_date?: Maybe<Scalars['String']>;
  pay_amount?: Maybe<Scalars['numeric']>;
  payment_status?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  student_level?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "student" */
export type Student_Mutation_Response = {
  __typename?: 'student_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Student>;
};

/** on_conflict condition type for table "student" */
export type Student_On_Conflict = {
  constraint: Student_Constraint;
  update_columns?: Array<Student_Update_Column>;
  where?: InputMaybe<Student_Bool_Exp>;
};

/** Ordering options when selecting data from "student". */
export type Student_Order_By = {
  date_ins?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initial_pay_date?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_pay_date?: InputMaybe<Order_By>;
  matricula?: InputMaybe<Order_By>;
  next_pay_date?: InputMaybe<Order_By>;
  pay_amount?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  student_level?: InputMaybe<Order_By>;
};

/** primary key columns input for table: student */
export type Student_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "student" */
export enum Student_Select_Column {
  /** column name */
  DateIns = 'date_ins',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  InitialPayDate = 'initial_pay_date',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastPayDate = 'last_pay_date',
  /** column name */
  Matricula = 'matricula',
  /** column name */
  NextPayDate = 'next_pay_date',
  /** column name */
  PayAmount = 'pay_amount',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  Phone = 'phone',
  /** column name */
  Status = 'status',
  /** column name */
  StudentLevel = 'student_level'
}

/** input type for updating data in table "student" */
export type Student_Set_Input = {
  date_ins?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  initial_pay_date?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_pay_date?: InputMaybe<Scalars['String']>;
  matricula?: InputMaybe<Scalars['String']>;
  next_pay_date?: InputMaybe<Scalars['String']>;
  pay_amount?: InputMaybe<Scalars['numeric']>;
  payment_status?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  student_level?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Student_Stddev_Fields = {
  __typename?: 'student_stddev_fields';
  group?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pay_amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Student_Stddev_Pop_Fields = {
  __typename?: 'student_stddev_pop_fields';
  group?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pay_amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Student_Stddev_Samp_Fields = {
  __typename?: 'student_stddev_samp_fields';
  group?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pay_amount?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "student" */
export type Student_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Student_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Student_Stream_Cursor_Value_Input = {
  date_ins?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  initial_pay_date?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_pay_date?: InputMaybe<Scalars['String']>;
  matricula?: InputMaybe<Scalars['String']>;
  next_pay_date?: InputMaybe<Scalars['String']>;
  pay_amount?: InputMaybe<Scalars['numeric']>;
  payment_status?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  student_level?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Student_Sum_Fields = {
  __typename?: 'student_sum_fields';
  group?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pay_amount?: Maybe<Scalars['numeric']>;
};

/** update columns of table "student" */
export enum Student_Update_Column {
  /** column name */
  DateIns = 'date_ins',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  InitialPayDate = 'initial_pay_date',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastPayDate = 'last_pay_date',
  /** column name */
  Matricula = 'matricula',
  /** column name */
  NextPayDate = 'next_pay_date',
  /** column name */
  PayAmount = 'pay_amount',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  Phone = 'phone',
  /** column name */
  Status = 'status',
  /** column name */
  StudentLevel = 'student_level'
}

export type Student_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Student_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Student_Set_Input>;
  where: Student_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Student_Var_Pop_Fields = {
  __typename?: 'student_var_pop_fields';
  group?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pay_amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Student_Var_Samp_Fields = {
  __typename?: 'student_var_samp_fields';
  group?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pay_amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Student_Variance_Fields = {
  __typename?: 'student_variance_fields';
  group?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pay_amount?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table in a streaming manner: "group" */
  group_stream: Array<Group>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table in a streaming manner: "student" */
  student_stream: Array<Student>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacher_aggregate: Teacher_Aggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacher_by_pk?: Maybe<Teacher>;
  /** fetch data from the table in a streaming manner: "teacher" */
  teacher_stream: Array<Teacher>;
};


export type Subscription_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGroup_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootStudentArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Subscription_RootStudent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Student_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Student_Order_By>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Subscription_RootStudent_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStudent_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Student_Stream_Cursor_Input>>;
  where?: InputMaybe<Student_Bool_Exp>;
};


export type Subscription_RootTeacherArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Subscription_RootTeacher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Subscription_RootTeacher_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTeacher_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Teacher_Stream_Cursor_Input>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};

/** columns and relationships of "teacher" */
export type Teacher = {
  __typename?: 'teacher';
  fire_date?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  hire_date: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  status: Scalars['String'];
};

/** aggregated selection of "teacher" */
export type Teacher_Aggregate = {
  __typename?: 'teacher_aggregate';
  aggregate?: Maybe<Teacher_Aggregate_Fields>;
  nodes: Array<Teacher>;
};

/** aggregate fields of "teacher" */
export type Teacher_Aggregate_Fields = {
  __typename?: 'teacher_aggregate_fields';
  avg?: Maybe<Teacher_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Teacher_Max_Fields>;
  min?: Maybe<Teacher_Min_Fields>;
  stddev?: Maybe<Teacher_Stddev_Fields>;
  stddev_pop?: Maybe<Teacher_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teacher_Stddev_Samp_Fields>;
  sum?: Maybe<Teacher_Sum_Fields>;
  var_pop?: Maybe<Teacher_Var_Pop_Fields>;
  var_samp?: Maybe<Teacher_Var_Samp_Fields>;
  variance?: Maybe<Teacher_Variance_Fields>;
};


/** aggregate fields of "teacher" */
export type Teacher_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teacher_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Teacher_Avg_Fields = {
  __typename?: 'teacher_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "teacher". All fields are combined with a logical 'AND'. */
export type Teacher_Bool_Exp = {
  _and?: InputMaybe<Array<Teacher_Bool_Exp>>;
  _not?: InputMaybe<Teacher_Bool_Exp>;
  _or?: InputMaybe<Array<Teacher_Bool_Exp>>;
  fire_date?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  hire_date?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "teacher" */
export enum Teacher_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeacherPkey = 'teacher_pkey'
}

/** input type for incrementing numeric columns in table "teacher" */
export type Teacher_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "teacher" */
export type Teacher_Insert_Input = {
  fire_date?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  hire_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Teacher_Max_Fields = {
  __typename?: 'teacher_max_fields';
  fire_date?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Teacher_Min_Fields = {
  __typename?: 'teacher_min_fields';
  fire_date?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "teacher" */
export type Teacher_Mutation_Response = {
  __typename?: 'teacher_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teacher>;
};

/** on_conflict condition type for table "teacher" */
export type Teacher_On_Conflict = {
  constraint: Teacher_Constraint;
  update_columns?: Array<Teacher_Update_Column>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};

/** Ordering options when selecting data from "teacher". */
export type Teacher_Order_By = {
  fire_date?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  hire_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: teacher */
export type Teacher_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "teacher" */
export enum Teacher_Select_Column {
  /** column name */
  FireDate = 'fire_date',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  HireDate = 'hire_date',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "teacher" */
export type Teacher_Set_Input = {
  fire_date?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  hire_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Teacher_Stddev_Fields = {
  __typename?: 'teacher_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Teacher_Stddev_Pop_Fields = {
  __typename?: 'teacher_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Teacher_Stddev_Samp_Fields = {
  __typename?: 'teacher_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "teacher" */
export type Teacher_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Teacher_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Teacher_Stream_Cursor_Value_Input = {
  fire_date?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  hire_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Teacher_Sum_Fields = {
  __typename?: 'teacher_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "teacher" */
export enum Teacher_Update_Column {
  /** column name */
  FireDate = 'fire_date',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  HireDate = 'hire_date',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Status = 'status'
}

export type Teacher_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Teacher_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Teacher_Set_Input>;
  where: Teacher_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Teacher_Var_Pop_Fields = {
  __typename?: 'teacher_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Teacher_Var_Samp_Fields = {
  __typename?: 'teacher_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Teacher_Variance_Fields = {
  __typename?: 'teacher_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'query_root', student: Array<{ __typename?: 'student', date_ins: string, first_name: string, group: number, id: number, last_name: string, last_pay_date: string, matricula: string, next_pay_date: string, payment_status: string, phone: string, student_level: string }> };

export const GetStudentsDocument = gql`
    query getStudents {
  student {
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

  @Injectable({
    providedIn: 'root'
  })
  export class GetStudentsGQL extends Apollo.Query<GetStudentsQuery, GetStudentsQueryVariables> {
    override document = GetStudentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }