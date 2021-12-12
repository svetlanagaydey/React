import React from 'react';

const BasicsOfJsx = () => {
    const data = ['hello', 'world'];
    const firstOutput =`${data[0][0].toUpperCase()}${data[0].slice(1)} ${data[1]}!`;

    const number1 = 5;
    const number2 = 6;
    const secontOutput = `${number1} + ${number2} = ${number1 + number2}`;

    const string = 'I love React!';
    const thirdOutput = `The string’s length is ${string.length}`;

    return (
    <div>
        {firstOutput} <br/>
        {secontOutput} <br/>
        {thirdOutput}
    </div>
    )
}

export default BasicsOfJsx;