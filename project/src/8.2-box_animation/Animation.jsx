import React from 'react';
import './Animation.css'

class Animation extends React.Component {
    state = {aimationName: ''};


componentDidMount() {
    setTimeout( () => {
        this.setState(() => this.state.aimationName = 'myAnimation');
        document.querySelector('.animation-box').style.animationName = 'myAnimation';
        console.log(this.state.aimationName);
    }, 3000);
}   

componentDidUpdate() {
    console.log(this.state.aimationName);
}

    render () {
        return (
            <div className ="animation-box">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
            </div>
        )
    }
}

export default Animation;