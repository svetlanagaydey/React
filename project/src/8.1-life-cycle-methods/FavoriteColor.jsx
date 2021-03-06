import React from 'react';

class FavoriteColor extends React.Component {
    state = {favoriteColor: 'blue'};

    componentDidMount() {
        console.log('loaded with favoriteColor = ' + this.state.favoriteColor );
        setTimeout( () => {
            this.setState({favoriteColor: 'yellow'})
        }, 1000);
    }

    componentDidUpdate() {
        console.log('updated with favoriteColor = ' + this.state.favoriteColor);
        document.querySelector('#updated').innerText=`My favorive color is ${this.state.favoriteColor}`;
        document.querySelector('#updated').style.backgroungColor = 'red';
    }
    
    render () {
        return (
            <div>
                <h1>My favorive color is {this.state.favoriteColor}</h1>
                <div id='updated'></div>
            </div>
        )
    }
}
export default FavoriteColor;