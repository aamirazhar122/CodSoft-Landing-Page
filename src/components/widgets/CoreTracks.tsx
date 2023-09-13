import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import QuarterBox from '../shared/QuarterBox';

const CoreTrackData=[
  {
    header:"Quarter I",
    description:"CS 101: Object Oriented Programming using Typescript",
    number:1
  },
  {
    header:"Quarter II",
    description:"CS 102: Object Oriented Programming using Typescript and Developing Planet Scale Web 2.0",
    number:2
  },
  {
    header:"Quarter III",
    description:"CS 103: Object Oriented Programming using Typescript and Dollar Making Bootcamp, Web 3.0 ",
    number:3
  }

];

const Coretrack = () => {
  const header=`Core Courses \n (Common in All Specializations):`
  return (
    <section className='mt-16 lg:mt-28'>
        <Wrapper>
        <div className='max-w-screen-lg'>
            <h4 className=' text-teal-700 font-semibold'>Programme of studies</h4>
            <h2 className='text-4xl font-bold whitespace-pre-line '>{header}</h2>
            <p className='text-md mt-4 text-slate-600'>Every participant of the programme will start by 
              completing the following three core courses</p>
            <div className='mt-3'>
              <Button text='Learn More'/> 
            </div>
               </div>
               {/* Boxes */}
            <div className='my-20 flex flex-col md:flex-row gap-x-8 gap-y-6'>
              {
                CoreTrackData.map((item,i)=>{
                 return(
                  <QuarterBox key={item.number}
                  description={item.description}  
                  header={item.header}
                  number={item.number}
                  Haveborder={true}   
                  Haveshadow={false}             
                  />
                 )
                })
              }
            </div>
        </Wrapper>
    </section>
    
  )
};

export default Coretrack;