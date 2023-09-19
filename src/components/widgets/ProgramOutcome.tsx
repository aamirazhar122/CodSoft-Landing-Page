import React from 'react'
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import unimg from '@/assets/uni.webp';
import { IoIosStar } from "react-icons/io";
const outcomePoints=["Product Ownership","Frelancing","Global Marketing by Panaverce Dao","Boosting Economy"];



const ProgramOutcome = () => {
  return (
    <section id="ProgramOutcome" className='mt-16 md:mt-28'>
    <Wrapper>
        <div className='flex gap-x-8 items-center flex-col-reverse md:flex-row'>
            {/* left side */}
            <div className='flex-1 mt-4'>
                <Image className='rounded-xl' src={unimg}
                height={380}
                width={480}
                 alt='program outcome '
                 />
            </div>
            {/* right side */}
            <div className='flex-1'>
                <h2 className='text-3xl font-bold'>The Outcome for Participants of the Program</h2>
                <p className='text-lg mt-4 text-slate-600'>As a graduate of this 
                program, you have own valueable products such as  Full stack AR and VR.
                The Ambient Computing and IOT specialized focuses on building smart homes</p>
            <div className='mt-6 grid grid-cols-2 gap-x-2 gap-y-4'>
                {
                  outcomePoints.map((item,i)=>(
                 <div key={i} className='flex gap-x-1'>
                    <div className='text-[#00E1F0] text-2xl '>
                        <IoIosStar/>
                    </div>
                    <h3 className='font-medium text-lg'>{item}</h3>

                    </div>
                  ))

                }
            </div>
            
            </div>

        </div>
<div className='mt-10'></div>
    </Wrapper>
    </section>
  )
}

export default ProgramOutcome;