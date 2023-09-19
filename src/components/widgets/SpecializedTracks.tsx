"use client"
import {useState} from 'react';
import React from 'react'
import Wrapper from '../shared/Wrapper';
import { BiChevronRight } from "react-icons/bi";
import QuarterBox from '../shared/QuarterBox';
import Image from 'next/image';
import webimg from "@/assets/img1.webp";
import AIimg from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";



export const Programdata=[

{
  slug:"wmd",
  header:"Web 3.0 (Blockchain) and Metaverse Specialization",
  description:"The Ambient Computing and IOT specialization focuses on building smart homes",
  Image:webimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"W2-201: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",    
number:4
  },
  {
    header:"Quarter V",
    description:"W2-202: Developing Planet-Scale Open Virtual",    
   number:5
     },
]

},
{
  slug:"ai",
  header:"Artifical Intelligence and Deep Learning Specialization",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta quod itaque officiis inventore possimus quidem natus rerum! Earum, fugit vitae? Provident debitis, praesentium asperiores vero vel labore soluta exercitationem!",
  Image:AIimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"AC-351: Developing a Planet-Scale Intelligent API,s and Python Programming ",    
number:4
  },
  {
    header:"Quarter V",
    description:"AC-361: Deep Learning and MLOps",    
   number:5
     },
]

},
{
  slug:"dl",
  header:"The Fundamentals of Deep Learning with TensorFlow ",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta quod itaque officiis inventore possimus quidem natus rerum! Earum, fugit vitae? Provident debitis, praesentium asperiores vero vel labore soluta exercitationem!",
  Image:img3,
  Quarters:[
    {
 header:"Quarter IV",
 description:"AC-351: deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory ",    
number:4
  },
  {
    header:"Quarter V",
    description:"module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice.",    
   number:5
     },
]

},
{
  slug:"wmd",
  header:"Web 3.0 (Blockchain) and Metaverse Specialization",
  description:"The Ambient Computing and IOT specialization focuses on building smart homes",
  Image:webimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"W2-201: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",    
number:4
  },
  {
    header:"Quarter V",
    description:"W2-202: Developing Planet-Scale Open Virtual",    
   number:5
     },
]

},
{
  slug:"ai",
  header:"Artifical Intelligence and Deep Learning Specialization",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta quod itaque officiis inventore possimus quidem natus rerum! Earum, fugit vitae? Provident debitis, praesentium asperiores vero vel labore soluta exercitationem!",
  Image:AIimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"AC-351: Developing a Planet-Scale Intelligent API,s and Python Programming ",    
number:4
  },
  {
    header:"Quarter V",
    description:"AC-361: Deep Learning and MLOps",    
   number:5
     },
]

},
{
  slug:"wmd",
  header:"Web 3.0 (Blockchain) and Metaverse Specialization",
  description:"The Ambient Computing and IOT specialization focuses on building smart homes",
  Image:webimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"W2-201: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",    
number:4
  },
  {
    header:"Quarter V",
    description:"W2-202: Developing Planet-Scale Open Virtual",    
   number:5
     },
]

},
{
  slug:"ai",
  header:"Artifical Intelligence and Deep Learning Specialization",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta quod itaque officiis inventore possimus quidem natus rerum! Earum, fugit vitae? Provident debitis, praesentium asperiores vero vel labore soluta exercitationem!",
  Image:AIimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"AC-351: Developing a Planet-Scale Intelligent API,s and Python Programming ",    
number:4
  },
  {
    header:"Quarter V",
    description:"AC-361: Deep Learning and MLOps",    
   number:5
     },
]

},
{
  slug:"wmd",
  header:"Web 3.0 (Blockchain) and Metaverse Specialization",
  description:"The Ambient Computing and IOT specialization focuses on building smart homes",
  Image:webimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"W2-201: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",    
number:4
  },
  {
    header:"Quarter V",
    description:"W2-202: Developing Planet-Scale Open Virtual",    
   number:5
     },
]

},
{
  slug:"ai",
  header:"Artifical Intelligence and Deep Learning Specialization",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta quod itaque officiis inventore possimus quidem natus rerum! Earum, fugit vitae? Provident debitis, praesentium asperiores vero vel labore soluta exercitationem!",
  Image:AIimg,
  Quarters:[
    {
 header:"Quarter IV",
 description:"AC-351: Developing a Planet-Scale Intelligent API,s and Python Programming ",    
number:4
  },
  {
    header:"Quarter V",
    description:"AC-361: Deep Learning and MLOps",    
   number:5
     },
]

},

];


const SpecializedTracks = () => {

const[selecteditem, setSelectedItem]=useState("wmd")
const SelectedItemData=
Programdata.find((item)=>{ return(
  item.slug===selecteditem)});

  


  return (
    //  header
    <section id="SpecializedTracks">
<Wrapper>
    
    <h2 className='text-4xl font-bold'>Specialized Tracks:</h2>
    <p className='text-md mt-4 text-slate-600 max-w-screen-sm '>After completing the first three quarters the participants 
  will select one or more for specializtions consisting of two courses each </p>
  
  {/* left side */}
  <div className='mt-10 flex  flex-col-reverse lg:flex-row gap-x-6 gap-y-8 '>
<div className='shadow-xl rounded-xl sticky top-20 self-start basis-8/12 border border-slate-200 py-8 px-8'>
    <h4 className='text-lg text-primary font-medium'>Specialized Program</h4>
    <h2 className='text-2xl font-bold'>{SelectedItemData?.header}</h2>
    <p className='text-md text-slate-600 mt-2'>{SelectedItemData?.description}</p>
<div className='flex items-end text-primary text-xl'>
<button className='mt-5 underline'>
  Learn More </button>
  <a className='font-semibold'>
  <BiChevronRight/>
  </a>
  </div>

<div className=' flex flex-col md:flex-row gap-6 mt-6'>
  {
    SelectedItemData?.Quarters.map((item)=>(
      <QuarterBox key={item.header}
      description={item.description}
      header={item.header}
       number={item.number}
       Haveborder={false}
      />
     ))
  }
    
</div>
</div>
{/* Rigt side */}
<div className='px-4 space-y-4 py-6  basis-4/12 bg-slate-100 flex-1 '>
{
Programdata.map((item,i)=> (
  <div onClick={()=> setSelectedItem(item.slug)} key={i} className='flex gap-x-4 items-center cursor-pointer '>
  <div className='flex-shrink-0 '>
  {/* <div className=' w-20 h-16 rounded bg-red-300'></div> */}
  <Image 
  src={item.Image} 
  alt={item.header}
  className='h-16 w-28 rounded-md object-cover'
  />
  
  </div>
 <div>
  <h4 className='text-primary text-md '>Specialised 
  Program</h4>
  <h3 className='text-md font-bold'>{item.header}</h3>
        </div>
        </div>
     ))

}
</div>
      
      
      </div>

      
  </Wrapper>
    </section>
    
  )
}

export default SpecializedTracks;