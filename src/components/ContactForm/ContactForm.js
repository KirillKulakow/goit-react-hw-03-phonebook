import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    ContForm,
    Input,
    InputLabel,
    ButtonSubmit
} from './ContactForm.module';
import PropTypes from 'prop-types';

const formInitialState = {
    name: '',
    number: ''
};

const ContactForm = ({contacts, addToContacts}) => {
    const [form, setForm] = useState(formInitialState);

    const addInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value})
    };

    const submitForm = (e) => {
        e.preventDefault();
        const {name, number} = form;
        const contact = {
            id: uuidv4(),
            name,
            number
        };
        if(contacts.some(contact => name === contact.name)){
            alert(`${name} is already in contacts.`);
            return
        }
        addToContacts(contact);
        setForm(formInitialState);
    };

    const {name, number} = form;
    const nameInput = uuidv4();
    const numberInput = uuidv4();
    return (
        <ContForm onSubmit={submitForm}>
            <InputLabel htmlFor={nameInput}>Name</InputLabel>
            <Input name="name" placeholder="Name and Surname" value={name} onChange={addInput} id={nameInput}/>
            <InputLabel htmlFor={numberInput}>Number</InputLabel>
            <Input id={numberInput} name="number" placeholder="Number" value={number} onChange={addInput}/>
            <ButtonSubmit type="submit" disabled={!name || !number}>Add to contact</ButtonSubmit>
        </ContForm>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired),
    addToContacts: PropTypes.any.isRequired
}

ContactForm.defaultTypes = {
    contacts: []
}

export default ContactForm;