import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Parent from './components/parentComponent';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Parent/>
  </React.StrictMode>
);

//https://bit.ly/CRA-vitals
reportWebVitals();
