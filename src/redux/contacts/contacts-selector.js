import { createSelector } from "@reduxjs/toolkit";

export const getContacts = ({ contacts }) => contacts.items;
export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error})

export const getNumberOfAllContacts = createSelector([getContacts], (contacts) => {
    return contacts.length
})

export const getFilterContacts = ({ filter, contacts }) => {
    if (!filter) {
        return contacts.items
    }

    const normalezedFilter = filter.toLocaleLowerCase()
    const filteredContacts = contacts.items.filter(({ name, phone }) => {
        const normalizedName = name.toLocaleLowerCase()
        const normalizedPhone = phone.toLocaleLowerCase()
        const res = normalizedName.includes(normalezedFilter) || normalizedPhone.includes(normalezedFilter)
        return res
    })
    return filteredContacts
}
