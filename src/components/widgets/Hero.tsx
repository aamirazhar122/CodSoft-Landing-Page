import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import colg from '@/assets/colg.jpg'
import Button from '../shared/Button';
const Hero = () => {
  return (
    <section>
    <Wrapper>
      {/* left side */}
        <div className='flex flex-col md:flex-row  items-center'>
          <div className='flex-1'>
            <h4 className=' text-teal-700 font-semibold mt-4 '>President Initiative for Artificial 
                Intelligence and Computing(PIAIC)</h4>
                <h1 className='text-5xl dm:text-5xl font-bold text-gray-900 mt-4 py-1'>
                  Certified Web 3.0 and Metaverse Developer</h1> 
                <p className='text-md mt-4 text-slate-600 max-w-lg'>
                The mission of Initiative for Artificial Intelligence and Computing (PIAIC) is to reshape Pakistan by revolutionizing 
                 education and research by adopting latest cutting-edge technologies.</p>
                    <p className=' text-md  text-slate-600 mt-2 max-w-lg'>
                    The internet is without a doubt the most 
                    important technological development in human history. 
                    Web and metaverse technologies expand the internet.
                    </p>
                   <div className='mt-5'>
                    <Button text={"Enroll Now"}/>
                    </div>
                    
        </div>
        {/* right side */}
<div className='flex-1'>
  <Image className=' rounded-xl mt-4 ml-2 '
  height={450}
  width={540}
  src={colg} 
  alt='colege'
  />
</div>
</div>
</Wrapper>
    </section>
  );

};

export default Hero;