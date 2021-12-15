import React from 'react';

const CheckBox = ({ inputName, isChacked, callBack }) => {
    return (
      <div>
        <input onChange={() => callBack()} checked={isChacked} type="checkbox" />
        <label>{inputName}</label>
      </div>
    );
  };
export default CheckBox;