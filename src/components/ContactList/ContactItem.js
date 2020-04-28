import React from 'react';
import './ContactItem.css';
import PropTypes from 'prop-types';
import 'material-icons';

const ContactItem = ({id, name, number, deleteContact}) => {
    const delContact = () => {
        deleteContact(id)
    }
    return (<>
        <li className="contact__item">
            <span className="material-icons green">call</span>
            <p className="contact__info">{`${name}: ${number}`}</p>
            <button className="material-icons red button" onClick={delContact}>delete_forever</button>
        </li>
        </>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.any.isRequired
}

export default ContactItem;