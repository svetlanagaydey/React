import React from 'react';
import ReactDOM from 'react-dom';
import ChackNorrisJoke from './Components/ChackNorrisJoke_12.1/ChackNorrisJoke.jsx';
import Focus from './Components/Focus_14.1/Focus.jsx'
import Copy from './Components/Copy_14.2/Copy.jsx'
import AppData from './Components/DataMassaging_13.1/AppData.jsx'


ReactDOM.render(
  <React.StrictMode>
     {/* <ChackNorrisJoke />
     <Focus />
     <Copy /> */}
     <AppData />
  </React.StrictMode>,
  document.getElementById('root')
);
