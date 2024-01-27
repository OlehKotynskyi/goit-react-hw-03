import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

const getContacts = () => {
   const storedContacts = localStorage.getItem('contacts');
   return storedContacts ? JSON.parse(storedContacts) : [];
};

export const App = () => {
   const [nameFilter, setNameFilter] = useState('');
   const [users, setUsers] = useState(getContacts);

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(users));
   }, [users]);

   const addUser = newUser => {
      setUsers(prevUsers => [
         ...prevUsers,
         {
            name: newUser.name,
            id: newUser.id,
            number: newUser.number,
         },
      ]);
   };

   const deleteUser = userId => {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
   };

   const visibleUsers = users.filter(user =>
      user.name.toLowerCase().includes(nameFilter.toLowerCase())
   );

   return (
      <div className={css.container}>
         <h1>Phonebook</h1>
         <ContactForm addUser={addUser} />
         <SearchBox value={nameFilter} onChange={setNameFilter} />
         <ContactList users={visibleUsers} onDelete={deleteUser} />
      </div>
   );
};
