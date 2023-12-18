import { ContactsForm } from './PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'store/selectors';
import { addContactThunk } from 'store/contactsSlice';

const PhonebookForm = () => {
  const { contacts } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const createContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;

    const isNew = contacts.every(el => {
      if (el.name.toLowerCase() === name.toLowerCase()) return false;
      if (el.phone === phone) return false;
      return true;
    });

    const isNumber = Number(phone);
    if (!isNumber) return Notiflix.Notify.warning(`${phone} is not a number!`);

    form.reset();

    if (!isNew)
      return Notiflix.Notify.warning(`${name} is already in contacts!`);

    const newContact = {
      name,
      phone,
    };

    dispatch(addContactThunk(newContact));
  };

  return (
    <ContactsForm onSubmit={createContact}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required autoComplete="name" />
      <label htmlFor="number">Number</label>
      <input type="tel" name="number" id="number" required autoComplete="tel" />
      <button type="submit">Add contact</button>
    </ContactsForm>
  );
};

export default PhonebookForm;
