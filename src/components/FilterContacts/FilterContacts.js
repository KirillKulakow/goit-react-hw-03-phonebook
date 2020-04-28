import React, { useState } from 'react';
import {
    FilterSearch,
    FilterLabel
} from './FilterContacts.module';
import PropTypes from 'prop-types';

const FilterContacts = ({filteredContacts}) => {
    const [filter, setFilter] = useState('');

    const filtered = (e) => {
        const name = e.target.value;
        setFilter(name)
    };

    const filtration = (e) => {
        filteredContacts(e.target.value);
        filtered(e);
    }

    return (<>
        <FilterLabel>Find contacts by name</FilterLabel>
        <FilterSearch
         type="text" 
         placeholder="Name" 
         value={filter} 
         onChange={filtration}/>
        </>
    );
};

FilterContacts.propTypes = {
    filteredContacts: PropTypes.any.isRequired
}

export default FilterContacts;