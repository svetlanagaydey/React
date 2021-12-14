import React from 'react';
import './styles.css';

class Hide extends React.Component {
    changeVisible = function() {
            document.querySelector('.neastedBlock').classList.toggle('visible');
    }
    render () {
        return (
            <div className="block">
                <button id="seekHide" onClick={this.changeVisible}>CLICK!</button>
                <div className="neastedBlock"></div>
            </div>
        )
    }
}

export default Hide;