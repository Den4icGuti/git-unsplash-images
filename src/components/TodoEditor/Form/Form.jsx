import { useState } from 'react';
import styles from '../Form/Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const Reset = () => {
    setName('');
    setEmail('');
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Name required');
      return;
    }
    if (email.trim() === '') {
      alert('Email requires');
      return;
    }

    Reset();
  };

  return (
    <div className={styles.boxForm}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <h2 className={styles.titleForm}>Authorization user</h2>
        <label>
          Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name..."
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email..."
          />
        </label>
        <button type="submit" className={styles.btnSubmit}>
          Authorization
        </button>
      </form>
    </div>
  );
};

export default Form;
