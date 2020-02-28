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
} from 'react-admin';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
import Poster from './Poster';
import { styles as createStyles } from './ProductCreate';

const ProductTitle = ({ record }) => <span>Poste #{record.title}</span>;

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
                    <TextInput source="author" />
                    <TextInput source="title" />
                    <DateField  source="createdAt" />
                    <DateField  source="updatedAt" />     
                </FormTab>
                <FormTab
                    label="Description"
                    path="description"
                >
                    <RichTextInput source="description" label="" />
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default ProductEdit;
