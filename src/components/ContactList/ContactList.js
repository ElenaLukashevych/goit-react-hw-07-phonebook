import { useSelector } from 'react-redux';
import { getFilter } from "redux/selectors";
import { useGetContactsQuery } from 'redux/contactsOperation';


import ContactItem from "components/ContactItem";
import s from './ContactList.module.css';

function ContactList() {
    const { data } = useGetContactsQuery();
    const filter = useSelector(getFilter);

  const getContacts = () => {
    if (filter === '') {
      return data;
    }

    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contacts = getContacts();


    if (contacts) {
         return (
        <ul className={s.list}>
            {contacts.map(({ id, name, phone }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={phone}
                />
           ))} 
            </ul>
        )
    }
   
};

export default ContactList;