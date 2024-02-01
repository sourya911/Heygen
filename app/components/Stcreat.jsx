import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import "../globals.css"

const Stcreat = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl mt-44'>Start Creating</h1>
        <h2 className='text-xl w-[500px]'>Create production-ready videos from text in seconds with AI-generated avatars and voices</h2>
        </div>
        <button className='flex items-center bg-mn text-white gap-3 p-4 rounded-xl mt-16'>Get started for featured
            <FaArrowRight/>
        </button>
    </div>
    </>
  )
}

export default Stcreat