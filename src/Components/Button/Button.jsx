import React from 'react';
import './Button.css';

const Button = ({data}) => {
  switch(data.id) {
    case 1:
      return (
        <button className='buttonToImport'>{data.txt}</button>
      );
    case 2:
      return (
        <button className='buttonToImport'>{data.txt}</button>
      );
    case 3:
      return (
        <button className='buttonToImport'>{data.txt}</button>
      );
    case 4:
      return (
        <button className='buttonToImport' style={data.styleee}>{data.txt}</button>
      );
      default:
        return null;
  }
};

export default Button;
