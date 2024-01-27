import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ users, onDelete }) => {
   return (
      <div>
         <ul className={css.list}>
            {users.map(({ id, name, number }) => (
               <Contact key={id} name={name} number={number} onDelete={() => onDelete(id)} />
            ))}
         </ul>
      </div>
   );
};
