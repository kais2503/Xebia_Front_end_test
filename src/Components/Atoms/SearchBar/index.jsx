import React from "react";
import {Field, reduxForm} from 'redux-form'

import styles from './styles.module.scss';

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

export const SearchBar = reduxForm({form: 'searchBar', destroyOnUnmount: false, keepDirtyOnReinitialize: true})(React.memo(partialSerachBar));
