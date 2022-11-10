import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from 'components/Filter/Filter'

import { useDispatch, useSelector } from 'react-redux'
import { featchContacts} from 'redux/contacts/contacts-operation'
import { useEffect } from 'react'
import { Spinner } from '@chakra-ui/react'
import { getState } from 'redux/contacts/contacts-selector'

export default function Contacts() {
    // const contacts = useSelector(getFilterContacts)
    // const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(featchContacts())
    }, [dispatch])

    const {loading} = useSelector(getState)

return (
    <div className='container'>
        <h1>Phonebook</h1>
        <ContactForm />
        
        <h2>Contacts{loading && <Spinner />}</h2>
        <Filter  />
        <ContactList />
    </div>
    )
}
