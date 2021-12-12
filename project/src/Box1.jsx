import React from 'react';
import Box2 from './Box2.jsx';

const Box1 = () => {
    return (
        <div style={{backgroundColor: 'red', width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box2></Box2>
        </div>
    )
}
export default Box1;