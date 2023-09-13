import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/Logo.png';
import Link from 'next/link';
import Wrapper from '../shared/Wrapper';

const Header = () => {
  return (
    <header className=' shadow-md sticky top-0 z-10 bg-white'>
    <Wrapper>
    <div className='flex justify-between items-center 
     py-2'>
        {/* logo */}
   <div>
        <Image
        width={113}
        height={65}
        src={Logo} 
        alt='Panaverse dao Logo'  />
   </div>
{/* Navigation */}

<ul className='flex space-x-8 text-sm'>
<li>
  <Link href={"/"}>
  Home
  </Link>
  </li>
<li>
  <Link href={"/courses"}>
  Courses
  </Link>
  </li>
</ul>

    </div>
    </Wrapper>
    </header>
  )
};

export default Header;