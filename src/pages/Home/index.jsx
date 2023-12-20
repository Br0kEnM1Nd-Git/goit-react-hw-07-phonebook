import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';

const Home = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />
      <PhonebookList />
    </>
  );
};

export default Home;
