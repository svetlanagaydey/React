import React from 'react';
import Card from './Card.jsx'

class CardsComponent extends React.Component {
    render () {
        const names = ['Tom', 'Sam', 'Will'];
        const articles = [
            'Lorem that ipsum, dolor sit amet consectetur adipisicing elit.',
            'Hello dolor, sit amet consectetur adipisicing elit.',
            'Seems ipsum dolor, sit amet consectetur adipisicing elit.'
        ]
        return (
            <div>
                <Card imageUrl ="https://picsum.photos/370/140" name ={names[0]} article ={articles[0]}/>
                <Card imageUrl ="https://picsum.photos/371/140" name ={names[1]} article ={articles[1]}/>
                <Card imageUrl ="https://picsum.photos/372/140" name ={names[2]} article ={articles[2]}/>
            </div>
        )
    }
}

export default CardsComponent;