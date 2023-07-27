import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading } from 'redux/selectors';
import ContactForm from 'components/contactForm';
import ContactList from 'components/contactList';
import { fetchContacts } from 'redux/operations';
import Loader from 'components/loader/Loader';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && <Loader/>}</div>
      <ContactList />
    </>
  );
}
