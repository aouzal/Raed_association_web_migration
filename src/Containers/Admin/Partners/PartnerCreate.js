import React from 'react';
import {
    Create,
    FormTab,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    TextInput,
    required,
} from 'react-admin';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
    price: { width: '7em' },
    width: { width: '7em' },
    height: { width: '7em' },
    stock: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const ProductCreate = props => {
    const classes = useStyles();
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="Partenaire">
                    <TextInput
                        autoFocus
                        source="urlImage"
                        fullWidth
                        validate={required()}
                    />
                    <TextInput source="name" validate={required()} />
                </FormTab>
               
            </TabbedForm>
        </Create>
    );
};

export default ProductCreate;
