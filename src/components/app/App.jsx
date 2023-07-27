import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import useAuth from 'hooks';
import RestrictedRoute from 'components/restrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import Loader from 'components/loader/Loader';

const HomePage = lazy(() => import('../../pages/Home'));
const LoginPage = lazy(() => import('../../pages/Login'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

const App = () => {
  const disputch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(() => {
     disputch(refreshUser())
  }, [disputch])
  
  return isRefreshing ? (
    <Loader/>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo='/contacts'/>} />
        <Route path='/contacts' element={ <PrivateRoute component={ContactsPage} redirectTo='/login'/> } />
      </Route>      
    </Routes>      
  )
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css['phonebook__container']}>
      
//       <h1 className={css['phonebook__title']}>Phonebook</h1>
//       <ContactForm />
//       {isLoading && !error ? <Loader /> : null}  
//       <h2 className={css['contacts__title']}>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
};

export default App;
