import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';
import {
  selectErrorContacts,
  selectIsLoadingContacts,
  selectVisibleContacts,
} from 'store/selectors';
import styles from './Phonebook.module.scss';

export const PhonebookList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectErrorContacts);

  return (
    <div className={styles.contactsList}>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        visibleContacts.map(contact => {
          return <ContactsItem contact={contact} key={contact.id} />;
        })
      )}
    </div>
  );
};
