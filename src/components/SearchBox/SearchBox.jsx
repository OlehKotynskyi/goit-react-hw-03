import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
   const searchId = useId();
   return (
      <div className={css.searchBox}>
         <label htmlFor={searchId}>Faind contacts by name</label>
         <input id={searchId} value={value} onChange={evt => onChange(evt.target.value)} />
      </div>
   );
};
