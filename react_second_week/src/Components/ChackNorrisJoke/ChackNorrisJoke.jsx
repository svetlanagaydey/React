import React from 'react';
import './style.css';
import axios from 'axios';

class ChackNorrisJoke extends React.Component {
    state = {currentCategory: ''}
    getRandomJoke =  () => {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response)=>console.log(response.data.value))
    }
    getCategories = async () => {
        await axios.get('https://api.chucknorris.io/jokes/categories')
        .then(response => response.data)
        .then(categories => {categories.map((el, index) => {
            console.log("+" +el);
            let newCat =document.createElement('div');
            newCat.innerHTML= `${el}`;
            newCat.setAttribute('key', index);
            newCat.classList.add('addCategory');
            newCat.setAttribute('onClick', () => {
                this.setState({currentCategory: this.el }, () => {
                    return axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.currentCategory}`)
                    .then(response => console.log("++++" + response))
                })
            })
            return document.querySelector('.content').appendChild(newCat);
        })})
    }
  
    render () {
        return <div className="content">
            <button className="randomJoke" onClick={this.getRandomJoke}>Random Joke</button>
            <button className="getCategories" onClick={this.getCategories}>Categories</button>
        </div>
    }
}


export default ChackNorrisJoke;