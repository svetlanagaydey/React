import React from 'react';
class  Button extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <button
                onClick={(e)=>this.props.kof(e.target.textContent)}
                style={{
                    backgroundColor: this.props.color,
                    color: 'white',
                    width: '60px',
                    height: '30px'}}
                >
                {this.props.color}
            </button>
        );
    }
}

export default Button;