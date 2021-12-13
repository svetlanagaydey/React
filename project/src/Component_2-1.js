import React from 'react';

const Component_2_1 = () => {
    function getButtonText() {
        return 'Click me please!'
    }

    return (
    <div>
        <h1>AppleSeeds React App </h1>
        <a href="./">
            {getButtonText()}
        </a>
    </div>
    )
}

export default Component_2_1;