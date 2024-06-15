import { selectNameFilter } from "../filter/selectors";
import { createSelector } from "@reduxjs/toolkit";
import { selectNumberFilter } from "../filter/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, filter, numberFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(numberFilter.toLowerCase())
    );
  }
);
