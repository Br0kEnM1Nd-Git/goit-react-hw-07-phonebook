import { AppWrapper, H1, H2 } from './components/Helpers/Components.styled';
import PhonebookForm from './components/PhonebookForm/PhonebookForm';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllContactsThunk } from 'store/contactsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <AppWrapper>
      <H1>Phonebook</H1>
      <PhonebookForm />
      <H2>Contacts</H2>
      <PhonebookFilter />
      <PhonebookList />
    </AppWrapper>
  );
};

export default App;
