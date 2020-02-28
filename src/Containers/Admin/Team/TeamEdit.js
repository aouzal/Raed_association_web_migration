import React from 'react';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    FormTab,
    NumberInput,
    Pagination,
    ReferenceInput,
    ReferenceManyField,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
    required,
    EmailField
} from 'react-admin';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
import Poster from './Poster';
import { styles as createStyles } from './TeamCreate';

const ProductTitle = ({ record }) => <span>Team #{record.firstName+" "+record.lastName}</span>;

const styles = {
    ...createStyles,
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const useStyles = makeStyles(styles);

const ProductEdit = props => {
    const classes = useStyles();
    return (
        <Edit {...props} title={<ProductTitle />}>
            <TabbedForm>
                <FormTab label="Image">
                    <Poster />
                    <TextInput source="urlImage" label="image" fullWidth />
                    {/* <TextInput source="thumbnail" fullWidth /> */}
                </FormTab>
                <FormTab label="Details" path="details">
                <TextInput disabled source="id" />
                    <TextInput source="firstName" validate={required()} />
                    <TextInput source="lastName" validate={required()} />
                    <EmailField source="email" validate={required()} />
                    <TextInput source="fonction" validate={required()} />
                    <TextInput source="phone" validate={required()} />
                    <TextInput source="role" validate={required()} />
                    <DateField  source="createdAt" />
                    <DateField  source="updatedAt" />     
                </FormTab>
               
            </TabbedForm>
        </Edit>
    );
};

export default ProductEdit;
