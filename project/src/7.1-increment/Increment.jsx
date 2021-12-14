import React from 'react';
    
class Increment extends React.Component {
    constructor() {
        super();
        this.state = {count: 3};
        
    } 
     Inc = () => {
        this.setState((prevState) => {
            return {count: this.state.count+1};
        });
        console.log(this.count)
    }
    Dec = () => {
        this.setState({count: this.state.count-1});
        //this.setState({count: this.state.count-2});
        console.log(this.count)
    }
    

    render () {
        return (
            <div>
                <label htmlFor="butt" style={{width: '40px', display: 'inline-block'}}> {this.state.count}</label>
                <button id="butt" onClick={this.Inc} >Press to Increment</button>
                <button onClick={this.Dec} >Press to Decrement</button>
            </div>
        )
    }
}

export default Increment;