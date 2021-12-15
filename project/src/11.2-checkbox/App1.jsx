import React from 'react';
import Checkbox from './Checkbox';
const myInputs = [
  {
    isChecked: false,
    id: 0,
    text: "I read the term of the app"
  },
  {
    isChecked: false,
    id: 1,
    text: "I accept the term of the app"
  },
  {
    isChecked: true,
    id: 2,
    text: "I want to get the weekly news letter"
  },
  {
    isChecked: true,
    id: 3,
    text: "I want to get sales and offers"
  }
];

class App1 extends React.Component {
    constructor() {
      super();
      this.state = {
        isInputChecked: false
      };
    }
  
    checkChanged = () => {
      this.setState({ isInputChecked: !this.state.isInputChecked });
    };
  
    render = () => {
      return (
        <div>
          {myInputs.map((inp) => {
          return(
            <Checkbox callBack={this.checkChanged}
              isChacked={inp.isChecked}
              inputName={inp.text}
            />
          )})
          }
        </div>
      );
    };
  }
  
export default App1;