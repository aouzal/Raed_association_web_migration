import React, { useState } from 'react';
import {Filter,DeleteButton,SearchInput,DateInput,BooleanInput,required, EditButton, Create, Edit, DateField, List, Datagrid, TextField, SelectInput, SimpleForm, TextInput } from 'react-admin';
export const ProductFilter = props => (
  <Filter {...props}>
      <SearchInput source="username" alwaysOn />              
      <DateInput source="createdAt"  />
      <DateInput source="updatedAt"  />
  </Filter>
);

export const UserList = props => (
  <List {...props} filters={<ProductFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="password"  />
      <TextField source="isAdmin" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" validate={required()} />
      <TextInput source="password" type="password"  validate={required()}/>
      <BooleanInput label="isAdmin" source="isAdmin" />
      <TextInput disabled source="createdAt" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props} >
    <SimpleForm save={addUser} >
      <TextInput source="username" validate={required()} />
      <TextInput source="password" type="password" validate={required()}/>
      <BooleanInput label="isAdmin" source="isAdmin" />
    </SimpleForm>
  </Create>
);

const addUser=(record)=>{
  console.log("HELLO WORLD !",record.username);
}