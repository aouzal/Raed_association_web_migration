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
import { styles as createStyles } from './PartnerCreate';

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
                <FormTab label="Partenaire">
                    <Poster />
                    <TextInput source="urlImage" label="image" fullWidth />
                    <TextInput source="name" fullWidth /> 
                    <TextInput disabled source="id" />
                    <DateField  source="createdAt" />
                    <DateField  source="updatedAt" /> 
                </FormTab>
                
            </TabbedForm>
        </Edit>
    );
};

export default ProductEdit;
