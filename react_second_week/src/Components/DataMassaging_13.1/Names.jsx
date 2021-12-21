import React from 'react';

const Names = (props) => {
    
    
    return (
        <div>
            <h2>Names Component</h2>
            {props.names.map((el, index) => {
            return <div key={index}>{el}</div>
            })}
        </div>
    )
}
export default Names;