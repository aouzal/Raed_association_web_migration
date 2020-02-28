import React from 'react';
import { Filter,DeleteButton, EditButton, Create, Edit, List, Datagrid,EmailField, TextField, SimpleForm, TextInput } from 'react-admin';

const PostFilter = (props) => (
  <Filter {...props}>
    <TextField label="Search" source="firstName" alwaysOn />
  </Filter>
);


export const TeamList = props => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="email" />
      <TextField source="fonction" />
      <TextField source="phone" />
      <TextField source="role" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const TeamEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <EmailField source="email" />
      <TextInput source="fonction" />
      <TextInput source="phone" />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);

export const TeamCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <EmailField source="email" />
      <TextInput source="fonction" />
      <TextInput source="phone" />
      <TextInput source="role" />
    </SimpleForm>
  </Create>
);