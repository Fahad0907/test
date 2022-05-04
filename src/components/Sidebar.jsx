import React from 'react';
import doc from '../image/doc.png';
import dash from '../image/dash.png';
import settings from '../image/settings.png';
import inventory from '../image/inventory.png';
import Table from './Table';
// md:h-screen sm:h-[72]
const Sidebar = () => {
  return (
    <div className='flex justify-start lg:flex-row  md:flex-row sm:flex-col-reverse  h-full'>
        <ul className='list-none mid:bg-search sm:bg-white md:bg-search  lg:w-[235px] md:w-[89px]  pr-[24px]  border  border-neutral-2 sm:flex  md:list-item sm:relative md:static sm:shadow-[0_-4px_2px_rgba(0,0,0,0.09)] md:shadow-[0_0_0_rgba(0,0,0,0)]'>
            <li className='flex '>
                <img className='sm:absolute  md:static sm:right-[85.39%] sm:mt-[20px]  md:mt-[34px] md:ml-[32.5px] h-[20px] w-[22.46px]'  src={dash} alt="dash" />
                <p className='mt-[35.5px] ml-[9.04px] text-neutral font-inter font-medium text-sm  tracking-[0.02rem]  sm:invisible lg:visible'>Dashboard</p>
            </li>
            <li className='flex sm:absolute md:static sm:right-[57%] sm:mt-[9px] bg-white lg:w-[188px] sm:w-[41px] h-[40] md:ml-[24px]  md:mt-[19.5px] pt-[11.5px] pb-[11.5px] pl-[12px] rounded'>
                <img className=' h-[20px] w-[15px] ' src={inventory} alt="inventory" />
                <p className='ml-[13px] text-primary font-inter font-medium text-sm  tracking-[0.02rem] sm:invisible lg:visible'>Inventory</p>
            </li>
            <li className='flex'>
                <img className='sm:absolute md:static sm:right-[35.39%] sm:mt-[20px] h-[20px] w-[17.5px] md:ml-[35px] md:mt-[18px] ' src={doc} alt="doc" />
                <p className='mt-[19.5px] ml-[11.5px] text-neutral font-inter font-medium text-sm  tracking-[0.02rem] sm:invisible lg:visible'>Documents</p>
            </li>
            <li className='flex'>
                <img className='sm:absolute  md:static sm:right-[10.39%] sm:mt-[20px]   h-[20px] w-[19.08px] md:ml-[34.42px] md:mt-[28px]' src={settings} alt="settings" />
                <p className='ml-[10.49px] mt-[31px] text-neutral font-inter font-medium text-sm  tracking-[0.02rem] sm:invisible lg:visible'>Settings</p>
            </li>
        </ul>

        <Table/>    

    </div>
  )
}

export default Sidebar;