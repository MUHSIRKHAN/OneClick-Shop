 import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import styles from '../../styles/styles'
import{IoBagHandleOutline} from 'react-icons/io5'
import {HiOutlineAcademicCap, HiOutlineMinus, HiPlus} from 'react-icons/hi'
import { Link } from 'react-router-dom'
 
 const Cart = ({setOpenCart}) => {
    const cartData=[
        {
            name:"Iphone14 pro max 256 gb ssd and 8gb ram silver",
            description:"test",
            price:99999
        },
        {
            name:"Oneplus14 pro max 256 gb ssd and 8gb ram silver",
            description:"test",
            price:99999
        },
        {
            name:"Samsung14 pro max 256 gb ssd and 8gb ram silver",
            description:"test",
            price:99999
        },
        
    ]
   return (
     <div className='fixed top=0 left-0 w-full bg-[#0000004b]  z-10'>
        <div className='fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm'>
            <div>
                <div className='flex w-full justify-end pt-5 pr-5'>
                    <RxCross1 size={25} className='cursor-pointer' onClick={()=>setOpenCart((false))}/>

                </div>
                {/*item lamgth*/}
                <div className={`${styles.noramlFlex}p-4`}>
                    <IoBagHandleOutline size={25}/>
                    <h5 className='pl-2 text-[20px] font-[500]'>3items</h5>
                     

                </div>
                {/* cart single items*/}
                <br />
                <div className='w-full border-t'>
                    {
                        cartData && cartData.map((i,index)=>(
                            <CartSingle key={index} data={i}/>
                        ))
                    }


                </div>
            </div>
            <div className='px-5 mb-3'>
                {/*checkout buttons*/}
                <Link to="/checkout">
                    <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#7c183d] rounded-[5px]`}>


                        <h1 className='text-[#fff] text-[18px] font-600'>CHECKOUT NOW (USD$2224)</h1>
                    </div>
                </Link>

            </div>
            <div>

            </div>

        </div>

     </div>
   )
 }
 const CartSingle=({data})=>{
    const[value,setValue]=useState(0)
    const totalPrice=data.price*value
    return(
        <div className=' border-b p-4'>
            <div className='w-full flex items-center'>
                <div>
                    <div className={`bg-[#7c183d] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`} onClick={()=>setValue(value+1)}>
                        <HiPlus size={18} color="#fff"/>

                    </div>
                    <span className='pl-[10px]'>
                        {value}
                    </span>
                    <div className='bg-[#a7abb14f] rounded-full lw-[25px] h-[25px] flex items-center justify-center cursor-pointer' onClick={()=>setValue(value === 1 ? 1:value-1)}>
                        <HiOutlineMinus size={16} color='#7d879c'/>

                    </div>
                </div>
                <img src="https://assets.burberry.com/is/image/Burberryltd/A6F02E9B-275D-413F-8166-FEEDA200BFF2?$BBY_V2_SL_1x1$&wid=998&hei=998" alt='' className='w-[80px] h-[80px] ml-2'/>
                <div className='pl-[5px]'>
                    <h1>{data.name}</h1>
                    <h4 className='font-[400] text-[15px] text-[#0000082]'>{data.price}*{value}</h4>
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#7c183d] font-Roboto'>US${totalPrice}</h4>

                </div>
                <RxCross1 className='cursor-pointer'/>

            </div>

        </div>

    )
 }
 
 export default Cart