
import css from 'components/Contacts/ContactList/ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
// import { removeContact } from 'redux/contacts/contacts-slice';
import { removeContact } from 'redux/contacts/contacts-operation';
import { getFilterContacts, getNumberOfAllContacts } from '../../../redux/contacts/contacts-selector'

export default function ContactList() {
  const items = useSelector(getFilterContacts)
  const dispatch = useDispatch()

  const contactsCount = useSelector(getNumberOfAllContacts)

  const onRemoveContact = (id) => {
    const action = removeContact(id)
    dispatch(action)
  }

  const elements = items?.map(({ name, number, id}) => {
      return (
      items.length>0 &&  <li className={css.item} key={id} > {name} {number} <button className={css.btn} onClick={ () => {onRemoveContact(id)} }>Delete</button></li>
      )
    })
  return (
    <div>
      <ul>{elements}</ul>
      {items.length === 0 && <p>Ничего не найдено.</p>}
      <p>Всего контактов: {contactsCount}</p> 
    </div>
  )
}


