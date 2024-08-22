import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='text-sm bg-gray-300/80 mx-2 py-1.5 px-5 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button