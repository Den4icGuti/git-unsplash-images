import React, { useContext } from 'react';
import prov from '../authContext';

const UserMenu = () => {
  const { user, logIn, logOut } = useContext(prov);

  return (
    <>
      <button type="button" onClick={logIn}>
        ENTER
      </button>
      {user && (
        <>
          <p>{user}</p>
          <button type="button" onClick={logOut}>
            OUT
          </button>
        </>
      )}
    </>
  );
};

export default UserMenu;
