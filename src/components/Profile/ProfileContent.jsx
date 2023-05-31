import React, { useEffect } from 'react'
import { backend_url } from '../../server'
import { useSelector } from 'react-redux'
import { AiOutlineCamera } from 'react-icons/ai'
import styles from '../../styles/styles'
import { useState } from 'react'

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user)
  const[name,setName]=useState("");
  const[email,setEmail]=useState(user&&user.email)
  const[phoneNumber,setPhoneNumber]=useState("")
  const[zipCode,setZipCode]=useState("")
  const[address1,setAddress1]=useState("")
  const[address2,setAddress2]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  useEffect(() => {
    if (user && user.name) {
      setName(user.name);
    }
  }, [user]);
  return (
    <div className="w-full">
      {/*profile page*/}
      {active === 1 ? (
         <>
        <div className=" flex justify-center w-full">
          <div className="relative">
            <img
              src={`${backend_url}${user?.avatar}`}
              className="w-[155px] h-[155px] rounded-full object-cover border-[3px] border-[#3ad132]"
              alt=""
            />
            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
          
              <AiOutlineCamera />
            </div>
          </div>
       

        </div>
        <br />
          <br />
        <div className='w-full px-5'> 
        <form onSubmit={handleSubmit} aria-required={true}>
          <div className='w-full flex pb-3'>
              <div className='w-[50%]'>
                  <label className='block pb-2'>
                      FULL NAME

                  </label>
                  <input type='text' className={`${styles.input} !w-[95]`} required value={name} onChange={(e)=>setName(e.target.value)}/>

              </div>
              <div className='w-[50%]'>
                  <label className='block pb-2'>
                      EMAIL ADDRESS

                  </label>
                  <input type='text' className={`${styles.input} !w-[95]`} required value={email} onChange={(e)=>setEmail(e.target.value)}/>

              </div>

          </div>
          <div className='w-full flex pb-3'>
              <div className='w-[50%]'>
                  <label className='block pb-2'>
                      PHONE NUMBER

                  </label>
                  <input type='number' className={`${styles.input} !w-[95]`} required value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>

              </div>
              <div className='w-[50%]'>
                  <label className='block pb-2'>
                      ZIP CODE

                  </label>
                  <input type='text' className={`${styles.input} !w-[95]`} required value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/>

              </div>

          </div>
          <div className='w-full flex pb-3'>
              <div className='w-[50%]'>
                  <label className='block pb-2'>
                      ADDRESS1

                  </label>
                  <input type='address' className={`${styles.input} !w-[95]`} required value={address1} onChange={(e)=>setAddress1(e.target.value)}/>

              </div>
              <div className='w-[50%]'>
                  <label className='block pb-2'>
                      ADDRESS2

                  </label>
                  <input type='address' className={`${styles.input} !w-[95]`} required value={address2} onChange={(e)=>setAddress2(e.target.value)}/>

              </div>

          </div>
          <input className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#7c183d]] rounded-[3px] mt-8 cursor-pointer`} required value="Update" type='submit'/>
        </form>
        
        </div>
        </> 
      ) : null}
      {/*order page*/}
      
    </div>
  )
}

export default ProfileContent
