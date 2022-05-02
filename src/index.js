import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import authContext from 'components/TodoEditor/Context/authContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <authContext.Provider value={{ name: 'Mango' }}>
        <App />
      </authContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
