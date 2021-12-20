import React from 'react';
import './Focus.css'

class Focus extends React.Component {
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