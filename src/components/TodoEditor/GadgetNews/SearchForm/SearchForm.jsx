import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onHandleInputValue = e => {
    setQuery(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('error');
      return;
    }
    setQuery('');
    onSubmit(query);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={query}
          onChange={onHandleInputValue}
          placeholder="Search images..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
