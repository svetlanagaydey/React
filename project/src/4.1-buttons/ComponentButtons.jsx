import React from 'react';
import Button from './Button';



const ComponentButtons = (props) => {
    return (
        <div>
            <Button value="Important" weigth="bold" backgroundColor='yellow'/>
            <Button value="Not important" />
        </div>
    )
}

export default ComponentButtons;