import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import styles from '../../styles/styles'
import{IoBagHandleOutline} from 'react-icons/io5'
import{BsCartPlus} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
 
 const Wishlist = ({setOpenWishlist}) => {
    const cartData=[
        {
            name:"Iphone14 pro max 256 gb ssd and 8gb ram silver ",
            description:"wishlist",
            price:99999
        },
        {
            name:"Oneplus14 pro max 256 gb ssd and 8gb ram silver",
            description:"wishlist",
            price:99999
        },
        {
            name:"Samsung14 pro max 256 gb ssd and 8gb ram silver",
            description:"wishlist",
            price:99999
        },
        
    ]
   return (
     <div className='fixed top=0 left-0 w-full bg-[#0004b] h-screen  z-10'>
        <div className='fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm'>
            <div>
                <div className='flex w-full justify-end pt-5 pr-5'>
                    <RxCross1 size={25} className='cursor-pointer' onClick={()=>setOpenWishlist((false))}/>

                </div>
                {/*item lamgth*/}
                <div className={`${styles.noramlFlex}p-4`}>
                    <AiOutlineHeart size={25}/>
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
            
            <div>

            </div>

        </div>

     </div>
   )
 }
 const CartSingle=({data})=>{
    const[value,setValue]=useState(0)
    const totalPrice=data.price
    return(
        <div className=' border-b p-4'>
            <div className='w-full flex items-center'>
                <RxCross1 className='cursor-pointer'/>
                <img src="https://assets.burberry.com/is/image/Burberryltd/A6F02E9B-275D-413F-8166-FEEDA200BFF2?$BBY_V2_SL_1x1$&wid=998&hei=998" alt='' className='w-[80px] h-[80px] ml-2'/>
              
                <div className='pl-[5px]'>
                    <h1>{data.name}</h1>
                  
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#7c183d] font-Roboto'>US${totalPrice}</h4>

                </div>
                <div>
                    <BsCartPlus size={20} className="cursor-pointer" title="Add to Cart"/>

                </div>
                
            </div>

        </div>

    )
 }
 
 export default Wishlist