import React from 'react';
import srch from '../image/srch.png';
import arrowDown from '../image/arrowdown.png'
import arrowUp from '../image/arrowup.png'
import { data } from './tabledata';
import down from '../image/down.png';
import Left from '../image/Left.png';
import right from '../image/right.png';

const Table = () => {
  return (
    <div className='w-full md:h-full bg-search '>
        <div className='w-full  bg-search border  border-neutral-2'>
          <p className='font-bold font-inter text-xl text-starbuck pl-[24px] pt-[16px] pb-[16px]'>Inventory</p>
        </div>
        <div className='flex flex-col bg-white rounded md:ml-[24px] sm:ml-[8px] mt-[24px] sm:mr-[8px] md:mr-[24px] sm:mb-[36px] md:mb-[89px] lg:mb-[323px] shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>
            <div className='flex justify-center bg-search rounded-lg sm:w-[342px] md:w-[392px] h-[40px] ml-[16px] mt-[24px] relative'>
              <img className='absolute top-[11.67px] left-[13.67px] h-[16.67px] w-[16.67px]' src={srch} alt="seach" />
              <input className='bg-search  rounded-lg focus:outline-none w-full pl-[40px]' type="text" placeholder='Search'/>
            </div>
            
            <div>
              <table className=' mt-[24px]  w-full'>
                <thead className='bg-warning'>
                  <tr className=''>
                    <th>
                      <input className='w-[17.5px] h-[17.46px] pt-[11.22px]  pb-[12.32px] ml-[4.5px] sm:hidden md:table-cell' type="checkbox"/>
                    </th>
                    <th className='flex'>
                      <p className=' pt-[10px]  pb-[11px] text-starbuck font-inter font-medium text-sm  tracking-[0.02rem] sm:hidden md:table-cell'>Date Updated</p> 
                      <img src={arrowDown} className='h-[11.23px] w-[10px] mt-[14.19px] ml-[7.19px] sm:hidden md:table-cell' />
                    </th>
                    <th className=''>
                      <div className='flex'>
                        <p className=' pt-[10px]  pb-[11px] text-starbuck font-inter font-medium text-sm  tracking-[0.02rem] sm:ml-[16px] md:ml-[0px]'>Title</p>
                        <div className='flex flex-col'>
                          <img className='w-[10px] h-[11.23px] mt-[12px] ml-[4px]' src={arrowUp} alt="" />
                          <img className='w-[10px] h-[11.23px] mt-[-6px] ml-[4px]' src={arrowDown} alt="" />
                        </div>
                      </div>
                    </th>
                    <th >
                      <p className='lg:table-cell sm:hidden text-left pt-[10px]  pb-[11px] text-starbuck font-inter font-medium text-sm  tracking-[0.02rem]'>Details</p>
                    </th>
                    <th >
                      <p className='   pt-[10px]  pb-[11px] text-starbuck font-inter font-medium text-sm  tracking-[0.02rem] sm:hidden md:table-cell'>Status</p>
                    </th>
                    <th>
                      <p className='lg:table-cell sm:hidden  pt-[10px]  pb-[11px] text-starbuck font-inter font-medium text-sm  tracking-[0.02rem]'>Quantity</p>
                    </th>
                    <th >
                      <p className='lg:table-cell sm:hidden  pt-[10px]  pb-[11px] text-starbuck font-inter font-medium text-sm  tracking-[0.02rem]'>Unit Price</p>
                    </th>
                    <th >
                      <div className='flex'>
                        <p className='text-left pt-[10px]  pb-[11px] text-starbuck font-inter font-medium text-sm  tracking-[0.02rem]'>Amount</p>
                        <div className='flex flex-col'>
                          <img className='w-[10px] h-[11.23px] mt-[12px] ml-[4px]' src={arrowUp} alt="" />
                          <img className='w-[10px] h-[11.23px] mt-[-6px] ml-[4px]' src={arrowDown} alt="" />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data,i)=>(
                    <tr>
                      <td><input className='w-[17.5px] h-[17.46px] ml-[19px] sm:hidden md:table-cell' type="checkbox"/></td>
                      <td><p className='table-details sm:hidden md:table-cell'>{data.Date}</p> </td>
                      <td><p className='table-details sm:ml-[16px] md:ml-[0px]'>{data.title}</p></td>
                      <td><p className='table-details lg:table-cell sm:hidden'>{data.details}</p></td>
                      {data.status === 'Alright' &&
                        <td className='flex'>
                          <p className='table-details sm:hidden md:table-cell'>{data.status}</p>
                          <p className='w-[8px] h-[8px] bg-success rounded-lg mt-[28px] ml-[8px]'></p>
                        </td>
                      }
                      {data.status === 'In Progress' &&
                        <td className='flex'>
                          <p className='table-details sm:hidden md:table-cell'>{data.status}</p>
                          <p className='w-[8px] h-[8px] bg-progress rounded-lg mt-[28px] ml-[8px]'></p>
                        </td>
                      }
                      {data.status === 'Out of Stock' &&
                        <td className='flex'>
                          <p className='table-details sm:hidden md:table-cell'>{data.status}</p>
                          <p className='w-[8px] h-[8px] bg-error rounded-lg mt-[28px] ml-[8px]'></p>
                        </td>
                      }
                      
                      
                      {
                        data.quantity === "0/200" ?
                        <td><p className='table-details ml-[17px] '>{data.quantity}</p></td>
                        :
                        <td><p className=''>{data.quantity}</p></td>
                      }
                      <td><p className='table-details lg:table-cell sm:hidden'>{data.Unitprice}</p></td>
                      {
                        data.amount === "$0.00" ? 
                        <td><p className='table-details ml-[17px] text-starbuck  '>{data.amount}</p></td>
                        :
                        <td><p className='table-details'>{data.amount}</p></td>
                      }
  
                    </tr>

                  ))}
                
                </tbody>
                
              </table>
              <div className='flex'>
                    <div className='sm:invisible  md:visible  flex border rounded border-page  mt-[24px] mb-[40px] ml-[16px] shadow-[0_3px_5px_rgba(0,0,0,0.07)] '>
                      <p className='pt-[6px] pb-[6px] pl-[8px] text-pageText font-inter font-medium text-[13px] tracking-[0.02em]'>10 items per page</p>
                      <img className='w-[13.75px] h-[6.87px] ml-[49.63px] mt-[12.87px] mr-[12.62px]' src={down} alt="down" />
                    </div>   

                    <div className='flex absolute md:right-[152px]  border rounded border-page mt-[24px] sm:ml-[16px] md:ml-0 shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>
                      <p className='pt-[6px] pb-[6px] pl-[8px] text-pageText font-inter font-medium text-[13px] tracking-[0.02em]'>Page 1 of 5</p>
                      <img className='w-[13.75px] h-[6.87px] ml-[49.63px] mt-[12.87px] mr-[12.62px]' src={down} alt="down" />
                    </div>

                    <div className='absolute sm:right-[142px] md:right-[96px]  border rounded border-page mt-[24px] shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>
                      <img className='w-[6.87px] h-[13.72px] mt-[9.16px] mb-[9.12px] ml-[16.25px] mr-[17.88px] ' src={Left} alt="left" />
                    </div>

                    <div className='absolute sm:right-[86px] md:right-[40px] border rounded border-page mt-[24px] shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>
                      <img className='w-[6.88px] h-[13.75px] mt-[9.13px] mb-[9.13px] ml-[15.88px] mr-[17.25px] ' src={right} alt="left" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Table;