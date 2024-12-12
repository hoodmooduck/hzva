import React from 'react';
import './styles/index.scss';
import Parent from './components/parentComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Parent/>
  </React.StrictMode>
);

reportWebVitals();
