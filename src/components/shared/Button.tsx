import React, { FC } from 'react';

const Button:FC<{text:string}> = ({text}) => {

  return (
    <button className='bg-[#00616C] rounded-full text-white 
    hover:shadow-lg px-7 py-3 text-lg font-medium 
    hover:scale-105 duration-300'>{text}</button>
  )
};

export default Button;