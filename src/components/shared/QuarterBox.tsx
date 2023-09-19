
import React, { FC } from 'react';

interface Iprops{
header:string,
description:string,
number:number,
Haveborder?:boolean,
Haveshadow?:boolean
};



const QuarterBox :FC<Iprops> = ({header,description,number,Haveborder,Haveshadow=true}) => {
  return (
                <div className={` justify-center flex-1 flex flex-col 
                rounded-md relative ${Haveshadow && "shadow-xl"} w-4/12 px-8 py-16 ${Haveborder && "border"}`}>
                 <h4 className='font-bold text-lg '>{header}</h4>
                 <p className='mt-2 text-slate-600 z-0'>{description}</p>
                 <div className='absolute text-gray-200  -top-4
                 right-6 font-bold text-[170px] -z-10'>{number}</div>
                 </div>
  )
};

export default QuarterBox;