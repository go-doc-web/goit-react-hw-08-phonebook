import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'Redux/auth/operations';
import RestricteRoute from './RestricteRoute';
import { useAuth } from 'hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import { Layout } from './Layout';

const HomePages = lazy(() => import('../pages/HomePages/HomePages'));
const RegisterPages = lazy(() => import('../pages/RegisterPages'));
const LoginPages = lazy(() => import('../pages/LoginPages/LoginPages'));
const ContactsPages = lazy(() =>
  import('../pages/ContactsPages/ContactsPages')
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route
            path="/register"
            element={
              <RestricteRoute
                component={RegisterPages}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestricteRoute component={LoginPages} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPages} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    )
  );
};

export default App;

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContact } from '../Redux/operations';
// import { selectIsLoading, selectError } from '../Redux/selectors';

// // import ContactsList from './ContactsList/ContactList';
// // import ContactFilter from './ContactFilter/ContactFilter';
// // import ContactsForm from './ContactsForm/ContactsForm';
// import ContactsPages from '../pages/ContactsPages';
// import NavBar from './AppBar/AppBar';

// // import css from './App.module.css';

// // const styleApp = {
// //   fontSize: 32,
// //   color: '#010101',
// // };

// const App = () => {
//   const dispatch = useDispatch();

//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContact());
//   }, [dispatch]);
//   return (
//     // <div style={styleApp} className={css.app}>
//     //   <div className={css.container}>
//     //     <div className={css.phonebook}>
//     //       <ContactsForm />
//     //     </div>
//     //   </div>
//     //   <div className={css.container}>
//     //     <div className={css.contacts}>
//     //       <h2>Contacts</h2>
//     //       <ContactFilter />
//     <>
//       {isLoading && !error && <p>Loading</p>}
//       <ContactsPages />
//       {/* <NavBar /> */}
//     </>
//     // {/* <ContactsList /> */}
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default App;
