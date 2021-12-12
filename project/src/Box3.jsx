import React from 'react';
import Box4 from './Box4';

const Box3 = () => {
    return (
        <div style={{backgroundColor: 'blue', width: '320px', height: '200px', display: 'flex', flexDirection: 'column', padding: '20px 0', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box4/>
            <Box4/>
        </div>
    )
}
export default Box3;