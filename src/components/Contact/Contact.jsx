import { FaPhone } from 'react-icons/fa6';
import { IoMdContact } from 'react-icons/io';
import css from './Contact.module.css';

export const Contact = ({ name, number, onDelete }) => {
   return (
      <li className={css.item}>
         <div>
            <div className={css.titel}>
               <span className={css.icon}>
                  <IoMdContact />
               </span>
               <h2>{name}</h2>
            </div>
            <p className={css.text}>
               <span className={css.icon}>
                  <FaPhone />
               </span>
               {number}
            </p>
         </div>
         <div>
            <button onClick={onDelete} className={css.button}>
               Delete
            </button>
         </div>
      </li>
   );
};
