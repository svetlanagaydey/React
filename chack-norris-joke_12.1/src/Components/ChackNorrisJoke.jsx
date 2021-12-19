import React from 'react';
import './style.css';
import axios from 'axios';

class ChackNorrisJoke extends React.Component {
    getRandomJoke =  () => {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response)=>console.log(response.data.value))
    }
    getCategories =  () => {
        axios.get('https://api.chucknorris.io/jokes/categories')
        .then(response => response.data)
        .then(categories => {categories.map((el) => {
            console.log("+" +el);
            let newCat =document.createElement('div');
            newCat.innerHTML= `${el}`;
            newCat.classList.add('addCategory');
            newCat.setAttribute('onClick', this.getJokeFromCategory);
            return document.querySelector('.content').appendChild(newCat);
            })
        })
    }
    getJokeFromCategory = () => {
        axios.get(`https://api.chucknorris.io/jokes/random?category=${this.el}`)
        .then(response => console.log("+" + response))
    }
    render () {
        return <div className="content">
            <button className="randomJoke" onClick={this.getRandomJoke}>Random Joke</button>
            <button className="getCategories" onClick={this.getCategories}>Categories</button>
        </div>
    }
}


export default ChackNorrisJoke;