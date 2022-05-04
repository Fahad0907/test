import React from 'react'
import bell from '../image/Vector.png'
import john from '../image/john.png'
import arrow from '../image/arrow.png'
import srch from '../image/srch.png'
const Nav = () => {
  return (
    <nav className='flex justify-start '>
        
        <div className='flex justify-start items-center '>
            <p className='ml-[36px] text-starbuck font-medium text-sm font-inter tracking-[0.02rem]'>Startbucks</p>
            <img className='ml-[7px] mt-[5px] ' src={arrow} alt="arrow" />
        </div>

        <div className='flex justify-center bg-search rounded-lg  w-[392px] h-[40px] lg:ml-[143px] lg:visible md:ml-[15px] md:visible sm:invisible   mt-[12px] mb-[12px] relative '>
            <img className='h-[16.67px] w-[16.67px] mt-[11.67px] ml-[13.67px] ' src={srch} alt="srch" />
            <input className='bg-search  rounded-lg focus:outline-none w-full pl-[9.67px] ' type="text" placeholder='Search'/>
        </div>

        <div className='flex justify-end items-center'>
            <img className='absolute right-[181px] ' src={bell} alt="bell" />
            <img className='absolute ml-5 h-[32px] w-[32px]  right-[130px]' src={john} alt="john" />
            <span className='font-inter text-sm text-starbuck ml-4 absolute right-[52px] tracking-[-0.25px]'>John Doe</span>
            <img className='absolute right-[31px]' src={arrow} alt="arrow" />
        </div>
        
    </nav>
  )
}

export default Nav