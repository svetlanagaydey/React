import React from 'react';
import './Focus.css'

class Focus extends React.Component {
    constructor () {
        super()
        this.nameInput = React.createRef();
    }
    componentDidMount(){
        this.nameInput.focus();
      }

    toFocus = (input) => {
        this.nameInput = input;
    }
      render() {

        return(
          <div>
            <input 
              defaultValue="Won't focus" 
            />
            <input 
              ref={this.toFocus} 
              defaultValue="will focus"
            />
          </div>
        );
      }
}
export default Focus;