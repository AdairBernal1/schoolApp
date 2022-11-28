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
  bigint: any;
  timestamptz: any;
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

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  day: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  teacher: Scalars['String'];
  time: Scalars['String'];
};


/** columns and relationships of "groups" */
export type GroupsStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields';
  avg?: Maybe<Groups_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
  stddev?: Maybe<Groups_Stddev_Fields>;
  stddev_pop?: Maybe<Groups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Groups_Stddev_Samp_Fields>;
  sum?: Maybe<Groups_Sum_Fields>;
  var_pop?: Maybe<Groups_Var_Pop_Fields>;
  var_samp?: Maybe<Groups_Var_Samp_Fields>;
  variance?: Maybe<Groups_Variance_Fields>;
};


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Groups_Avg_Fields = {
  __typename?: 'groups_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: InputMaybe<Array<Groups_Bool_Exp>>;
  _not?: InputMaybe<Groups_Bool_Exp>;
  _or?: InputMaybe<Array<Groups_Bool_Exp>>;
  day?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  students?: InputMaybe<Students_Bool_Exp>;
  students_aggregate?: InputMaybe<Students_Aggregate_Bool_Exp>;
  teacher?: InputMaybe<String_Comparison_Exp>;
  time?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupsPkey = 'groups_pkey'
}

/** input type for incrementing numeric columns in table "groups" */
export type Groups_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  day?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  students?: InputMaybe<Students_Arr_Rel_Insert_Input>;
  teacher?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  day?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  teacher?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  day?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  teacher?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** on_conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  students_aggregate?: InputMaybe<Students_Aggregate_Order_By>;
  teacher?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  Teacher = 'teacher',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  day?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  teacher?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Groups_Stddev_Fields = {
  __typename?: 'groups_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Groups_Stddev_Pop_Fields = {
  __typename?: 'groups_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Groups_Stddev_Samp_Fields = {
  __typename?: 'groups_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "groups" */
export type Groups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Groups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Groups_Stream_Cursor_Value_Input = {
  day?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  teacher?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Groups_Sum_Fields = {
  __typename?: 'groups_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  Teacher = 'teacher',
  /** column name */
  Time = 'time'
}

export type Groups_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Groups_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Groups_Var_Pop_Fields = {
  __typename?: 'groups_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Groups_Var_Samp_Fields = {
  __typename?: 'groups_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Groups_Variance_Fields = {
  __typename?: 'groups_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "students" */
  delete_students?: Maybe<Students_Mutation_Response>;
  /** delete single row from the table: "students" */
  delete_students_by_pk?: Maybe<Students>;
  /** delete data from the table: "teachers" */
  delete_teachers?: Maybe<Teachers_Mutation_Response>;
  /** delete single row from the table: "teachers" */
  delete_teachers_by_pk?: Maybe<Teachers>;
  /** delete data from the table: "user_type" */
  delete_user_type?: Maybe<User_Type_Mutation_Response>;
  /** delete single row from the table: "user_type" */
  delete_user_type_by_pk?: Maybe<User_Type>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "students" */
  insert_students?: Maybe<Students_Mutation_Response>;
  /** insert a single row into the table: "students" */
  insert_students_one?: Maybe<Students>;
  /** insert data into the table: "teachers" */
  insert_teachers?: Maybe<Teachers_Mutation_Response>;
  /** insert a single row into the table: "teachers" */
  insert_teachers_one?: Maybe<Teachers>;
  /** insert data into the table: "user_type" */
  insert_user_type?: Maybe<User_Type_Mutation_Response>;
  /** insert a single row into the table: "user_type" */
  insert_user_type_one?: Maybe<User_Type>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update multiples rows of table: "groups" */
  update_groups_many?: Maybe<Array<Maybe<Groups_Mutation_Response>>>;
  /** update data of the table: "students" */
  update_students?: Maybe<Students_Mutation_Response>;
  /** update single row of the table: "students" */
  update_students_by_pk?: Maybe<Students>;
  /** update multiples rows of table: "students" */
  update_students_many?: Maybe<Array<Maybe<Students_Mutation_Response>>>;
  /** update data of the table: "teachers" */
  update_teachers?: Maybe<Teachers_Mutation_Response>;
  /** update single row of the table: "teachers" */
  update_teachers_by_pk?: Maybe<Teachers>;
  /** update multiples rows of table: "teachers" */
  update_teachers_many?: Maybe<Array<Maybe<Teachers_Mutation_Response>>>;
  /** update data of the table: "user_type" */
  update_user_type?: Maybe<User_Type_Mutation_Response>;
  /** update single row of the table: "user_type" */
  update_user_type_by_pk?: Maybe<User_Type>;
  /** update multiples rows of table: "user_type" */
  update_user_type_many?: Maybe<Array<Maybe<User_Type_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StudentsArgs = {
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Students_By_PkArgs = {
  student_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_TeachersArgs = {
  where: Teachers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teachers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_TypeArgs = {
  where: User_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StudentsArgs = {
  objects: Array<Students_Insert_Input>;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Students_OneArgs = {
  object: Students_Insert_Input;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeachersArgs = {
  objects: Array<Teachers_Insert_Input>;
  on_conflict?: InputMaybe<Teachers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teachers_OneArgs = {
  object: Teachers_Insert_Input;
  on_conflict?: InputMaybe<Teachers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_TypeArgs = {
  objects: Array<User_Type_Insert_Input>;
  on_conflict?: InputMaybe<User_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Type_OneArgs = {
  object: User_Type_Insert_Input;
  on_conflict?: InputMaybe<User_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _inc?: InputMaybe<Groups_Inc_Input>;
  _set?: InputMaybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _inc?: InputMaybe<Groups_Inc_Input>;
  _set?: InputMaybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_ManyArgs = {
  updates: Array<Groups_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StudentsArgs = {
  _inc?: InputMaybe<Students_Inc_Input>;
  _set?: InputMaybe<Students_Set_Input>;
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Students_By_PkArgs = {
  _inc?: InputMaybe<Students_Inc_Input>;
  _set?: InputMaybe<Students_Set_Input>;
  pk_columns: Students_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Students_ManyArgs = {
  updates: Array<Students_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeachersArgs = {
  _inc?: InputMaybe<Teachers_Inc_Input>;
  _set?: InputMaybe<Teachers_Set_Input>;
  where: Teachers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teachers_By_PkArgs = {
  _inc?: InputMaybe<Teachers_Inc_Input>;
  _set?: InputMaybe<Teachers_Set_Input>;
  pk_columns: Teachers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teachers_ManyArgs = {
  updates: Array<Teachers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_TypeArgs = {
  _set?: InputMaybe<User_Type_Set_Input>;
  where: User_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Type_By_PkArgs = {
  _set?: InputMaybe<User_Type_Set_Input>;
  pk_columns: User_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Type_ManyArgs = {
  updates: Array<User_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
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
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
  /** fetch data from the table: "teachers" */
  teachers: Array<Teachers>;
  /** fetch aggregated fields from the table: "teachers" */
  teachers_aggregate: Teachers_Aggregate;
  /** fetch data from the table: "teachers" using primary key columns */
  teachers_by_pk?: Maybe<Teachers>;
  /** fetch data from the table: "user_type" */
  user_type: Array<User_Type>;
  /** fetch aggregated fields from the table: "user_type" */
  user_type_aggregate: User_Type_Aggregate;
  /** fetch data from the table: "user_type" using primary key columns */
  user_type_by_pk?: Maybe<User_Type>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Query_RootGroups_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_By_PkArgs = {
  student_id: Scalars['bigint'];
};


export type Query_RootTeachersArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Query_RootTeachers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Query_RootTeachers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Type_Order_By>>;
  where?: InputMaybe<User_Type_Bool_Exp>;
};


export type Query_RootUser_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Type_Order_By>>;
  where?: InputMaybe<User_Type_Bool_Exp>;
};


export type Query_RootUser_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};

/** columns and relationships of "students" */
export type Students = {
  __typename?: 'students';
  date_ins?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  group?: Maybe<Scalars['Int']>;
  /** An object relationship */
  groupByGroup?: Maybe<Groups>;
  last_name: Scalars['String'];
  matricula: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  student_id: Scalars['bigint'];
  tuition_type: Scalars['String'];
};

/** aggregated selection of "students" */
export type Students_Aggregate = {
  __typename?: 'students_aggregate';
  aggregate?: Maybe<Students_Aggregate_Fields>;
  nodes: Array<Students>;
};

export type Students_Aggregate_Bool_Exp = {
  count?: InputMaybe<Students_Aggregate_Bool_Exp_Count>;
};

export type Students_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Students_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Students_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "students" */
export type Students_Aggregate_Fields = {
  __typename?: 'students_aggregate_fields';
  avg?: Maybe<Students_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Students_Max_Fields>;
  min?: Maybe<Students_Min_Fields>;
  stddev?: Maybe<Students_Stddev_Fields>;
  stddev_pop?: Maybe<Students_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Students_Stddev_Samp_Fields>;
  sum?: Maybe<Students_Sum_Fields>;
  var_pop?: Maybe<Students_Var_Pop_Fields>;
  var_samp?: Maybe<Students_Var_Samp_Fields>;
  variance?: Maybe<Students_Variance_Fields>;
};


/** aggregate fields of "students" */
export type Students_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Students_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "students" */
export type Students_Aggregate_Order_By = {
  avg?: InputMaybe<Students_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Students_Max_Order_By>;
  min?: InputMaybe<Students_Min_Order_By>;
  stddev?: InputMaybe<Students_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Students_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Students_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Students_Sum_Order_By>;
  var_pop?: InputMaybe<Students_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Students_Var_Samp_Order_By>;
  variance?: InputMaybe<Students_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "students" */
export type Students_Arr_Rel_Insert_Input = {
  data: Array<Students_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Students_On_Conflict>;
};

/** aggregate avg on columns */
export type Students_Avg_Fields = {
  __typename?: 'students_avg_fields';
  group?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "students" */
export type Students_Avg_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "students". All fields are combined with a logical 'AND'. */
export type Students_Bool_Exp = {
  _and?: InputMaybe<Array<Students_Bool_Exp>>;
  _not?: InputMaybe<Students_Bool_Exp>;
  _or?: InputMaybe<Array<Students_Bool_Exp>>;
  date_ins?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  group?: InputMaybe<Int_Comparison_Exp>;
  groupByGroup?: InputMaybe<Groups_Bool_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  matricula?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  student_id?: InputMaybe<Bigint_Comparison_Exp>;
  tuition_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "students" */
export enum Students_Constraint {
  /** unique or primary key constraint on columns "matricula" */
  StudentsMatriculaKey = 'students_matricula_key',
  /** unique or primary key constraint on columns "student_id" */
  StudentsPkey = 'students_pkey'
}

/** input type for incrementing numeric columns in table "students" */
export type Students_Inc_Input = {
  group?: InputMaybe<Scalars['Int']>;
  student_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "students" */
export type Students_Insert_Input = {
  date_ins?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['Int']>;
  groupByGroup?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  last_name?: InputMaybe<Scalars['String']>;
  matricula?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  student_id?: InputMaybe<Scalars['bigint']>;
  tuition_type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Students_Max_Fields = {
  __typename?: 'students_max_fields';
  date_ins?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  matricula?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['bigint']>;
  tuition_type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "students" */
export type Students_Max_Order_By = {
  date_ins?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  matricula?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  tuition_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Students_Min_Fields = {
  __typename?: 'students_min_fields';
  date_ins?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  matricula?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['bigint']>;
  tuition_type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "students" */
export type Students_Min_Order_By = {
  date_ins?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  matricula?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  tuition_type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "students" */
export type Students_Mutation_Response = {
  __typename?: 'students_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Students>;
};

/** on_conflict condition type for table "students" */
export type Students_On_Conflict = {
  constraint: Students_Constraint;
  update_columns?: Array<Students_Update_Column>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** Ordering options when selecting data from "students". */
export type Students_Order_By = {
  date_ins?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  groupByGroup?: InputMaybe<Groups_Order_By>;
  last_name?: InputMaybe<Order_By>;
  matricula?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  tuition_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: students */
export type Students_Pk_Columns_Input = {
  student_id: Scalars['bigint'];
};

/** select columns of table "students" */
export enum Students_Select_Column {
  /** column name */
  DateIns = 'date_ins',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Group = 'group',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Matricula = 'matricula',
  /** column name */
  Phone = 'phone',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  TuitionType = 'tuition_type'
}

/** input type for updating data in table "students" */
export type Students_Set_Input = {
  date_ins?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  matricula?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  student_id?: InputMaybe<Scalars['bigint']>;
  tuition_type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Students_Stddev_Fields = {
  __typename?: 'students_stddev_fields';
  group?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "students" */
export type Students_Stddev_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Students_Stddev_Pop_Fields = {
  __typename?: 'students_stddev_pop_fields';
  group?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "students" */
export type Students_Stddev_Pop_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Students_Stddev_Samp_Fields = {
  __typename?: 'students_stddev_samp_fields';
  group?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "students" */
export type Students_Stddev_Samp_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "students" */
export type Students_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Students_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Students_Stream_Cursor_Value_Input = {
  date_ins?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  matricula?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  student_id?: InputMaybe<Scalars['bigint']>;
  tuition_type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Students_Sum_Fields = {
  __typename?: 'students_sum_fields';
  group?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "students" */
export type Students_Sum_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** update columns of table "students" */
export enum Students_Update_Column {
  /** column name */
  DateIns = 'date_ins',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Group = 'group',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Matricula = 'matricula',
  /** column name */
  Phone = 'phone',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  TuitionType = 'tuition_type'
}

export type Students_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Students_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Students_Set_Input>;
  where: Students_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Students_Var_Pop_Fields = {
  __typename?: 'students_var_pop_fields';
  group?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "students" */
export type Students_Var_Pop_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Students_Var_Samp_Fields = {
  __typename?: 'students_var_samp_fields';
  group?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "students" */
export type Students_Var_Samp_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Students_Variance_Fields = {
  __typename?: 'students_variance_fields';
  group?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "students" */
export type Students_Variance_Order_By = {
  group?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table in a streaming manner: "groups" */
  groups_stream: Array<Groups>;
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
  /** fetch data from the table in a streaming manner: "students" */
  students_stream: Array<Students>;
  /** fetch data from the table: "teachers" */
  teachers: Array<Teachers>;
  /** fetch aggregated fields from the table: "teachers" */
  teachers_aggregate: Teachers_Aggregate;
  /** fetch data from the table: "teachers" using primary key columns */
  teachers_by_pk?: Maybe<Teachers>;
  /** fetch data from the table in a streaming manner: "teachers" */
  teachers_stream: Array<Teachers>;
  /** fetch data from the table: "user_type" */
  user_type: Array<User_Type>;
  /** fetch aggregated fields from the table: "user_type" */
  user_type_aggregate: User_Type_Aggregate;
  /** fetch data from the table: "user_type" using primary key columns */
  user_type_by_pk?: Maybe<User_Type>;
  /** fetch data from the table in a streaming manner: "user_type" */
  user_type_stream: Array<User_Type>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGroups_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Groups_Stream_Cursor_Input>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};


export type Subscription_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_By_PkArgs = {
  student_id: Scalars['bigint'];
};


export type Subscription_RootStudents_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Students_Stream_Cursor_Input>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootTeachersArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Subscription_RootTeachers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teachers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teachers_Order_By>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Subscription_RootTeachers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTeachers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Teachers_Stream_Cursor_Input>>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};


export type Subscription_RootUser_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Type_Order_By>>;
  where?: InputMaybe<User_Type_Bool_Exp>;
};


export type Subscription_RootUser_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Type_Order_By>>;
  where?: InputMaybe<User_Type_Bool_Exp>;
};


export type Subscription_RootUser_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUser_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Type_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "teachers" */
export type Teachers = {
  __typename?: 'teachers';
  created_at: Scalars['timestamptz'];
  first_name: Scalars['String'];
  hire_date: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
};

/** aggregated selection of "teachers" */
export type Teachers_Aggregate = {
  __typename?: 'teachers_aggregate';
  aggregate?: Maybe<Teachers_Aggregate_Fields>;
  nodes: Array<Teachers>;
};

/** aggregate fields of "teachers" */
export type Teachers_Aggregate_Fields = {
  __typename?: 'teachers_aggregate_fields';
  avg?: Maybe<Teachers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Teachers_Max_Fields>;
  min?: Maybe<Teachers_Min_Fields>;
  stddev?: Maybe<Teachers_Stddev_Fields>;
  stddev_pop?: Maybe<Teachers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teachers_Stddev_Samp_Fields>;
  sum?: Maybe<Teachers_Sum_Fields>;
  var_pop?: Maybe<Teachers_Var_Pop_Fields>;
  var_samp?: Maybe<Teachers_Var_Samp_Fields>;
  variance?: Maybe<Teachers_Variance_Fields>;
};


/** aggregate fields of "teachers" */
export type Teachers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teachers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Teachers_Avg_Fields = {
  __typename?: 'teachers_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "teachers". All fields are combined with a logical 'AND'. */
export type Teachers_Bool_Exp = {
  _and?: InputMaybe<Array<Teachers_Bool_Exp>>;
  _not?: InputMaybe<Teachers_Bool_Exp>;
  _or?: InputMaybe<Array<Teachers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  hire_date?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "teachers" */
export enum Teachers_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeachersPkey = 'teachers_pkey'
}

/** input type for incrementing numeric columns in table "teachers" */
export type Teachers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "teachers" */
export type Teachers_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  hire_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Teachers_Max_Fields = {
  __typename?: 'teachers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Teachers_Min_Fields = {
  __typename?: 'teachers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "teachers" */
export type Teachers_Mutation_Response = {
  __typename?: 'teachers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teachers>;
};

/** on_conflict condition type for table "teachers" */
export type Teachers_On_Conflict = {
  constraint: Teachers_Constraint;
  update_columns?: Array<Teachers_Update_Column>;
  where?: InputMaybe<Teachers_Bool_Exp>;
};

/** Ordering options when selecting data from "teachers". */
export type Teachers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  hire_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: teachers */
export type Teachers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "teachers" */
export enum Teachers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  HireDate = 'hire_date',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "teachers" */
export type Teachers_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  hire_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Teachers_Stddev_Fields = {
  __typename?: 'teachers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Teachers_Stddev_Pop_Fields = {
  __typename?: 'teachers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Teachers_Stddev_Samp_Fields = {
  __typename?: 'teachers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "teachers" */
export type Teachers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Teachers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Teachers_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  hire_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Teachers_Sum_Fields = {
  __typename?: 'teachers_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "teachers" */
export enum Teachers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  HireDate = 'hire_date',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

export type Teachers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Teachers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Teachers_Set_Input>;
  where: Teachers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Teachers_Var_Pop_Fields = {
  __typename?: 'teachers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Teachers_Var_Samp_Fields = {
  __typename?: 'teachers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Teachers_Variance_Fields = {
  __typename?: 'teachers_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_type" */
export type User_Type = {
  __typename?: 'user_type';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "user_type" */
export type User_Type_Aggregate = {
  __typename?: 'user_type_aggregate';
  aggregate?: Maybe<User_Type_Aggregate_Fields>;
  nodes: Array<User_Type>;
};

/** aggregate fields of "user_type" */
export type User_Type_Aggregate_Fields = {
  __typename?: 'user_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Type_Max_Fields>;
  min?: Maybe<User_Type_Min_Fields>;
};


/** aggregate fields of "user_type" */
export type User_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_type". All fields are combined with a logical 'AND'. */
export type User_Type_Bool_Exp = {
  _and?: InputMaybe<Array<User_Type_Bool_Exp>>;
  _not?: InputMaybe<User_Type_Bool_Exp>;
  _or?: InputMaybe<Array<User_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_type" */
export enum User_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserTypePkey = 'user_type_pkey'
}

export enum User_Type_Enum {
  /** tiene permisos a todas las funciones CRUD */
  Admin = 'admin',
  /** puede mirar su grupo y su informacion  */
  Student = 'student',
  /** tiene acceso a visualizar sus grupos y alumnos */
  Teacher = 'teacher'
}

/** Boolean expression to compare columns of type "user_type_enum". All fields are combined with logical 'AND'. */
export type User_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Type_Enum>;
  _in?: InputMaybe<Array<User_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<User_Type_Enum>;
  _nin?: InputMaybe<Array<User_Type_Enum>>;
};

/** input type for inserting data into table "user_type" */
export type User_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Type_Max_Fields = {
  __typename?: 'user_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Type_Min_Fields = {
  __typename?: 'user_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_type" */
export type User_Type_Mutation_Response = {
  __typename?: 'user_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Type>;
};

/** on_conflict condition type for table "user_type" */
export type User_Type_On_Conflict = {
  constraint: User_Type_Constraint;
  update_columns?: Array<User_Type_Update_Column>;
  where?: InputMaybe<User_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "user_type". */
export type User_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_type */
export type User_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_type" */
export enum User_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_type" */
export type User_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_type" */
export type User_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_type" */
export enum User_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type User_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Type_Set_Input>;
  where: User_Type_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password: Scalars['String'];
  user_id: Scalars['String'];
  user_type: User_Type_Enum;
  username: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  user_type?: InputMaybe<User_Type_Enum_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  password?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_type?: InputMaybe<User_Type_Enum>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_type?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Password = 'password',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserType = 'user_type',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  password?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_type?: InputMaybe<User_Type_Enum>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  password?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_type?: InputMaybe<User_Type_Enum>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Password = 'password',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserType = 'user_type',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'query_root', students: Array<{ __typename?: 'students', tuition_type: string, student_id: any, phone?: string | null, matricula: string, last_name: string, date_ins?: string | null, first_name: string, group?: number | null }> };

export const GetStudentsDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class GetStudentsGQL extends Apollo.Query<GetStudentsQuery, GetStudentsQueryVariables> {
    override document = GetStudentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }