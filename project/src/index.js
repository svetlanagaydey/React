// if (module.hot) {
//     module.hot.accept();
//   }

//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Component_2_1 from './Component_2-1.js';
import BasicsOfJsx from './basics_of_jsx-2_2.jsx';
import Box1 from './Box1.jsx';
import Quiz from './Quiz.jsx';
import ComponentButtons from './4.1-buttons/ComponentButtons.jsx'
import CardsComponent from './4.2-cards/CardsComponent.jsx'



//Create a react component
const App = () => {
  //  const buttonText = "Click me";
  
    return (
    <div>
       <Component_2_1/>
       <BasicsOfJsx/>
        <Box1></Box1>
        <Quiz/>
        <ComponentButtons />
        <CardsComponent />
    </div>
    )
}

//Take the react component and show it on the screen
ReactDOM.render( <App />,document.querySelector('#root'));