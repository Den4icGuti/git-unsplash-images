// import { useState } from 'react';
import { useContext } from 'react';
import ctx from './authContext';

const Context = () => {
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <>
      <button type="button" onClick={logIn}>
        Enter
      </button>
      <p>{user}</p>
      <button type="button" onClick={logOut}>
        Output
      </button>
    </>
  );
};

export default Context;
