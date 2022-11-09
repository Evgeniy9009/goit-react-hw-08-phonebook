import { createSlice } from "@reduxjs/toolkit";
import { featchContacts, addContact, removeContact } from "./contacts-operation";
import { pendingCallback, rejectedCallback } from "helper/redux";

const initialState = {
    items: [ ],
    loading: false,
    error: null

}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState:  initialState ,
    extraReducers: {
        [featchContacts.pending]: pendingCallback
        ,
        [featchContacts.fulfilled]: (store, { payload }) => {
    store.loading = false
    store.items = payload
},
        [featchContacts.rejected]: rejectedCallback,
        [addContact.pending]: pendingCallback,
        [addContact.fulfilled]: (store, { payload }) => {
            store.loading = false
            store.items?.push(payload)
        },
        [addContact.rejected]: rejectedCallback,
        [removeContact.pending]: pendingCallback,
        [removeContact.fulfilled]: (store, { payload }) => {
            store.loading = false
            store.items = store.items?.filter(item => item.id !== payload)
        },
        [removeContact.rejected]: rejectedCallback,
    }
})


export default contactsSlice.reducer;