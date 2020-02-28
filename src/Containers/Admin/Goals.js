import React from 'react';
import { Filter,required,SearchInput,DateInput,DateField,DeleteButton, EditButton, Create, Edit, List, Datagrid, TextField, SimpleForm, TextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
export const PostFilter = props => (
  <Filter {...props}>
      <SearchInput source="title" alwaysOn />              
      <DateInput source="createdAt"  />
      <DateInput source="updatedAt"  />
  </Filter>
);

export const GoalList = props => (
  <List {...props}  filters={<PostFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const GoalEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" validate={required()} />
      <RichTextInput source="description" label="" validate={required()}/>
      <DateField  source="createdAt" />
      <DateField  source="updatedAt" /> 
    </SimpleForm>
  </Edit>
);

export const GoalCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" validate={required()} />
      <RichTextInput source="description" label="" validate={required()}/>
    </SimpleForm>
  </Create>
);