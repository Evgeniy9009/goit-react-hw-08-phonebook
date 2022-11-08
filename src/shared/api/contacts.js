
import instance from "./auth"

export const getContacts = async () => {
    const { data } = await instance.get('/contacts')
    return data
}

export const addContact = async(data) => {
    const { data: result } = await instance.post('/contacts', data)
    console.log(data)
    return result
}

export const removeContact = async (contactId) => {
    const { data } = await instance.delete(`/contacts/${contactId}`)
    return data
}