import React from 'react';

const Button = (props) => {
return (
    <button style={{background: props.backgroundColor, fontWeight: props.weigth}}> {props.value} </button>
    )
}

export default Button;