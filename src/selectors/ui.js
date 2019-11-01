import {createSelector} from 'reselect'

const ui = state => state.ui;

const showDetailedBookSelector = createSelector(ui, state => state.showedDetailedBook);

export const uiSelector = {
    showDetailedBookSelector
}