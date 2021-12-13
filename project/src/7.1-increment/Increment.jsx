import { render } from '@testing-library/react';
import React from 'react';
    
class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 3};
    } 
    Increment = () => {
        this.setState({count: this.state.count+1});
    }

    render () {
        return (
            <div>
                <label htmlFor="butt" style={{width: '40px', display: 'inline-block'}}> {this.state.count}</label>
                <button id="butt" onClick={this.Increment.bind(this)} >Press to Increment</button>
            </div>
        )
    }
}

export default Increment;