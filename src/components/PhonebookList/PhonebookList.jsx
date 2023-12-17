import { useSelector } from 'react-redux';
import { ContactsList } from './PhonebookList.styled';
import ContactsItem from './ContactsItem';
import { selectVisibleContacts } from 'store/selectors';

export const PhonebookList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(contact => {
        return <ContactsItem contact={contact} key={contact.id} />;
      })}
    </ContactsList>
  );
};
