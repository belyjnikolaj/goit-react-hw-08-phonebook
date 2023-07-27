import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {  
  const dispatch = useDispatch();  
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    const existingContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      dispatch(addContact(newContact)); 
    }
    
    form.reset();
  };
 
    return (
        <form onSubmit={handleSubmit} className={css.form}>
        <h2 className={css['input__title']}>Name</h2>
        <input
          className={css['input']}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        <h2 className={`${css['input__title']} ${css['number']}`}>Number</h2>
        <input
          className={css['input']}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

            <button className={css.button__add} type="submit">Add contact</button>
      </form>
    );
  }

export default ContactForm;