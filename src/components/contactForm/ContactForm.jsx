import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, createTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, changeContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { ThemeProvider } from '@emotion/react';
import css from './ContactForm.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5D4037',
    },
  },
});

const isContactNumberExists = (number, currentContactId, contacts) => {
  return contacts.some(
    contact => contact.number === number && contact.id !== currentContactId
  );
};

const ContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [formData, setFormData] = useState({ name: '', number: '' });

  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name || '',
        number: contact.number || '',
      });
    }
  }, [contact]);

  const handleNameChange = event => {
    const formattedName =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setFormData(prevData => ({ ...prevData, name: formattedName }));
  };

  const handleNumberChange = event => {
    const numberOnly = event.target.value.replace(/[^\d]/g, ''); // Видаляємо всі нецифрові символи
    setFormData(prevData => ({ ...prevData, number: numberOnly }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = formData;

    const existingContactByName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const existingContactByNumber = isContactNumberExists(
      number,
      contact?.id,
      contacts
    );

    if (existingContactByName && (!contact || contact.name !== name)) {
      alert(`${name} is already in contacts!`);
    } else if (existingContactByNumber && (!contact || contact.number !== number)) {
      alert(`${number} is already associated with another contact!`);
    } else {
      if (contact?.id) {
        if (contact.name !== name || contact.number !== number) {
          try {
            await dispatch(changeContact({ contactId: contact.id, name, number }));
            onClose();
          } catch (error) {
            console.error('Error updating contact:', error);
          }
        } else {
          onClose();
        }
      } else {
        dispatch(addContact({ name, number }));
        setFormData({ name: '', number: '' });
      }
    }

    form.reset();
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className={css.form}>
      <ThemeProvider theme={theme}>
        <TextField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleNameChange}
          label="Name"
          fullWidth
          color="primary"
          id="outlined-textarea"
          placeholder="Enter name"
          multiline
          value={formData.name}
        />
        <TextField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .-\s]?\(?\d{1,3}?\)?[ .-\s]?\d{1,4}[ .-\s]?\d{1,4}[ .-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleNumberChange}
          label="Number"
          fullWidth
          color="primary"
          id="outlined-textarea"
          placeholder="Enter number"
          multiline
          value={formData.number}
        />

        <Button type="submit" variant="contained" disableElevation color="primary">
          {contact?.id ? 'Update contact' : 'Add contact'}
        </Button>
      </ThemeProvider>
    </form>
  );
};

ContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onClose: PropTypes.func,
};

export default ContactForm;
