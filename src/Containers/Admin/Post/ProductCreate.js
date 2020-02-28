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
                <FormTab label="Image">
                    <TextInput
                        autoFocus
                        source="urlImage"
                        fullWidth
                        validate={required()}
                    />
                    {/* <TextInput
                        source="thumbnail"
                        fullWidth
                        validate={required()}
                    /> */}
                </FormTab>
                <FormTab label="Details" path="details">
                    <TextInput source="author" validate={required()} />
                    <TextInput source="title" validate={required()} />    
                </FormTab>
                <FormTab
                    label="Description"
                    path="description"
                >
                    <RichTextInput source="description" label="" />
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default ProductCreate;
