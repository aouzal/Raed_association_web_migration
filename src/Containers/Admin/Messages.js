import React from 'react';
import RichTextInput from "ra-input-rich-text";
import {DeleteButton,SearchInput,DateInput,EditButton, Create, Edit, List, Datagrid, TextField,Filter,DateField , SimpleForm, TextInput } from 'react-admin';

export const PostFilter = props => (
  <Filter {...props}>
      <SearchInput source="nom" alwaysOn />              
      <DateInput source="createdAt"  />
      <DateInput source="updatedAt"  />
  </Filter>
);

export const MessageList = props => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
            <TextField source="nom" />
            <TextField  source="prenom" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="message" />
            <DateField  source="createdAt" />
            <DateField  source="updatedAt" />          
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);



  export const MessageCreate = props => (
    <Create {...props}>
      <SimpleForm>
            <TextInput source="nom" />
            <TextInput  source="prenom" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="message" />
      </SimpleForm>
    </Create>
  );