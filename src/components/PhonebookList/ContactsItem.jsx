import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'store/contactsSlice';

const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(deleteContactAction(id));

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={deleteContact}>Delete</button>
    </li>
  );
};

export default ContactsItem;
