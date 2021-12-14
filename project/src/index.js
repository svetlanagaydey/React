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
import Increment from './7.1-increment/Increment.jsx';
import Hide from './7.2-hide_seek/Hide.jsx';
import FavoriteColor from './8.1-life-cycle-methods/FavoriteColor.jsx';
import Animation from './8.2-box_animation/Animation';


//Create a react component
const App = () => {
//  const buttonText = "Click me";
  
    return (
    <div>
       {/* <Component_2_1/>
       <BasicsOfJsx/>
        <Box1></Box1>
        <Quiz/>
        <ComponentButtons />
        <CardsComponent />
        <Increment /> */}
        <Hide />
        <FavoriteColor />
        <Animation />
    </div>
    )
}

//Take the react component and show it on the screen
ReactDOM.render( <App />,document.querySelector('#root'));