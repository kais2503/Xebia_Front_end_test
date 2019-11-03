import React from "react";
import {Field, reduxForm} from 'redux-form';
import PropTypes from "prop-types";

const partialSerachBar = ({filterBooks}) => (
    <form onSubmit={e => e.preventDefault()}>
        <div>

            <Field
                name="search"
                component="input"
                placeholder="recherche"
                type="text"
                onChange={(e) => filterBooks(e.target.value)}/>
        </div>
    </form>
)

export const SearchBar = reduxForm({form: 'searchBar', destroyOnUnmount: false})(React.memo(partialSerachBar));

SearchBar.propTypes = {
    filterBooks: PropTypes.func.isRequired
};