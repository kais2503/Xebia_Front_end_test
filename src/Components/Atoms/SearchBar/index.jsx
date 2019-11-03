import React from "react";
import {Field, reduxForm} from 'redux-form'

const partialSerachBar = ({filterBooks}) => (
    <form onSubmit={e => e.preventDefault()}>
        <div>

            <Field
                name="search"
                component="input"
                type="text"
                onChange={(e) => filterBooks(e.target.value)}/>
        </div>
    </form>
)

export const SearchBar = reduxForm({form: 'searchBar', destroyOnUnmount: false})(React.memo(partialSerachBar));
