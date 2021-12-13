import React from 'react';
import Button1 from './Button1';
import Button2 from './Button2';


const ComponentButtons = (props) => {
    return (
        <div>
            <Button1 value="Important" />
            <Button2 value="Not important" />
        </div>
    )
}

export default ComponentButtons;