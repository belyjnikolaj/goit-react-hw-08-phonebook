import Contact from 'components/contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {    
  const filteredContacts = useSelector(selectFilteredContacts);
  
    return (
      <>
        {filteredContacts.length === 0 ? (
          <p>No contacts available</p>
        ) : (
          <ul>
            {filteredContacts.map((contact) => (
                  <Contact contact = { contact } key={contact.id} />                
              ))}
          </ul>
        )}
      </>
    );
}



export default ContactList;
