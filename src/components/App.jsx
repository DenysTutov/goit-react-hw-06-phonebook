import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import style from '../components/App.module.scss';

import {
  addNewContact,
  filteredContacts,
  deleteContact,
} from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contactsItems = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleAddNewContact = newContact => {
    dispatch(addNewContact(newContact));
  };

  const handleChangeFilter = event => {
    dispatch(filteredContacts(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contactsItems.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const contactsName = contactsItems.map(contact => contact.name);

  return (
    <div>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddNewContact} contactsName={contactsName} />

      <h2 className={style.title}>Contacts</h2>
      <div className={style.contact_list_container}>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList
          visibleContacts={getFilteredContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </div>
      <ToastContainer />
    </div>
  );
};
