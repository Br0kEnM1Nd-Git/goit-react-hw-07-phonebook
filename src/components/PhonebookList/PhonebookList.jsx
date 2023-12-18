import { useSelector } from 'react-redux';
import { ContactsList } from './PhonebookList.styled';
import ContactsItem from './ContactsItem';
import {
  selectErrorContacts,
  selectIsLoadingContacts,
  selectVisibleContacts,
} from 'store/selectors';

export const PhonebookList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectErrorContacts);

  return (
    <ContactsList>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        visibleContacts.map(contact => {
          return <ContactsItem contact={contact} key={contact.id} />;
        })
      )}
    </ContactsList>
  );
};
