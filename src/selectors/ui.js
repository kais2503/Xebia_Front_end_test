import {createSelector} from 'reselect'

const ui = state => state.ui;

const showDetailedBookSelector = createSelector(ui, state => state.showedDetailedBook);
const showConfiramtionSelector = createSelector(ui, state => state.showConfiramtion);

export const uiSelector = {
    showDetailedBookSelector,
    showConfiramtionSelector
}