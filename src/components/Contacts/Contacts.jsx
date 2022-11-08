import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from 'components/Filter/Filter'

import { useDispatch } from 'react-redux'
import { featchContacts} from 'redux/contacts/contacts-operation'
import { useEffect } from 'react'

export default function Contacts() {
    // const contacts = useSelector(getFilterContacts)
    // const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(featchContacts())
    }, [dispatch])

return (
    <div className='container'>
        <h1>Phonebook</h1>
        <ContactForm />
        
        <h2>Contacts</h2>
        <Filter  />
        <ContactList />
    </div>
    )
}
