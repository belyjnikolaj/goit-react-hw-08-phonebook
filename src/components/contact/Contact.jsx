import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { deleteContact } from 'redux/operations';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();  
  return (
    <li className={css['contact__item']} key={contact.id}>
        {contact.name}: {contact.number}
        <button
            type="button"
            className={css["btn__close"]}
            aria-label="Close"
            onClick={() => dispatch(deleteContact(contact.id))}
        >
        Delete
        </button>
    </li>
  )
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,  
};

export default Contact;