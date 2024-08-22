import React from 'react'
import ButtonList from './ButtonList'
import { Outlet } from 'react-router-dom'
function Body() {
  return (
    <div className='flex-1 '>
      <ButtonList />
      <Outlet />
    </div>
  )
}

export default Body