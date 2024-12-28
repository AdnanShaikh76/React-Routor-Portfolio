import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { userid } = useParams()

  return (
    <div className='text-center bg-gray-500 p-5 text-white text-3xl'>User : {userid}</div>
  )
}

export default User