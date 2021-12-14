import React from 'react';
import './ChangingBox.css';

class ChangingBox extends React.Component {
    state = {colorIndex: -1,
            changeBorder: ''
        }

    colors = ['red', 'blue', 'yellow', 'plum', 'orange'];

    componentDidMount() {
      let fff = setInterval(() => {
        this.setState(() => this.state.colorIndex += 1);
        console.log(this.state.colorIndex);
        document.querySelector('.changinBox').style.backgroundColor=`${this.colors[this.state.colorIndex]}`;
        if (this.state.colorIndex === this.colors.length-1) {
            clearInterval(fff);
            this.setState(() => this.state.changeBorder = "now");
        }
        }, 500);
        
    }  
    componentDidUpdate() {
        if (this.state.changeBorder === 'now')
        document.querySelector('.changinBox').style.borderRadius='50%';
    }


    render () {
        return (
            <div className="changinBox"></div>
        )
    }
}

export default ChangingBox;