import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Slider() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

   // early return pattern
  if(!isMenuOpen) return null ;
  
  return (
    <div className='w-44  px-5 shadow-md'>
        <ul className='py-5'>
            <li><Link to='/' >Home</Link></li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
        <div className='border-t py-5'>
            <h2 className='font-bold'>Subscriptions</h2>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>
        </div>
        <div className='border-t py-5'>
            <h2 className='font-bold'>Explore</h2>
            <ul>
                <li>Trending</li>
                <li>Music</li>
                <li>Live</li>
                <li>Movie</li>
            </ul>
        </div>
    </div>
  )
}

export default Slider