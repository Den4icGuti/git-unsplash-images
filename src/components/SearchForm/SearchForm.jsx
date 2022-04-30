import { useState } from 'react';
import styles from '../SearchForm/SearchForm.module.css';

const Form = ({ onsubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const Reset = () => {
    setSearchQuery('');
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      alert('enter the text');
      return;
    }
    onsubmit(searchQuery);
    Reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="searchQuery"
          placeholder="Search images..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search...</button>
      </form>
    </header>
  );
};

export default Form;
