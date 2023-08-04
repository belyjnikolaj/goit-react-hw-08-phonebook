import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading } from 'redux/selectors';
import ContactForm from 'components/contactForm';
import ContactList from 'components/contactList';
import { fetchContacts } from 'redux/operations';
import Loader from 'components/loader/Loader';
import Filter from 'components/filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />      
      <Filter />
      <div>{isLoading && <Loader/>}</div>
      <ContactList />
    </>
  );
}
