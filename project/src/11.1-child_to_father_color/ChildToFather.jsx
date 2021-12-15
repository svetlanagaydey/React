import React from 'react';
import Button from './Button.jsx';

const colors = ['blue','red','yellow', 'green'];

class ChildToFather extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedColor: ''
        }
    }

    printColorName = (color) => {
        this.setState({selectedColor: color})
    }

    
    render = () => {
        return (
            <div>
               
        <h1>The color clicked is {this.state.selectedColor}</h1>
                
                {colors.map((btn, index) => {
                    return <Button kof={this.printColorName} key={index} color={btn} />
                })}
            </div>
             
        )
    }
    
}

export default ChildToFather;