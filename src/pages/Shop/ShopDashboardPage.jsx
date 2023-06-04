import React, { useState } from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashBoardSidebar from '../../components/Shop/Layout/DashBoardSidebar'


const ShopDashboardPage = () => {
  const[active,setActive]=useState(false)
  return (
    <div>
        <DashboardHeader/>
        <div className="flex items-center justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashBoardSidebar active={1}/>

          </div>
        </div>
    </div>
  )
}

export default ShopDashboardPage