import React from 'react'

const DivSec = () => {
  return (
    <>
      <div className='mt-0 flex gap-7 container'>
        <div className='w-2/3 mb-10 bg-white rounded-2xl ' >
            <div className='flex flex-col p-3 items-start gap-10'>
            <h1 className='text-black text-2xl'>ChatGPT script writer</h1>
            <p className='text-xl text-black'>Accelerate your video creation with our AI writing assistant.</p>
            </div>
            <div className='mt-12'>
                <video src="https://resource.heygencdn.com/homepage/scriptgenai2.mp4" 
                autoPlay
                loop
                muted
                className='w-full object-cover rounded-2xl'></video>
            </div>
        </div>


        <div className='w-1/3 bg-blue-800 p-4 pb-0 flex flex-col max-h-[480px] rounded-2xl'>
            <div className='flex flex-col gap-4'>
            <h1 className='text-2xl'>AI outfits</h1>
            <p className='mt-10'>Elevate your avatar for any occasion with a wide range of customizable clothing options.</p>
            </div>
            <div className='object-cover w-full mt-24'>
                <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4.webp" className='h-full w-full m-0 inline-block' alt="" />

            </div>
        </div>
        </div>  
    </>
  )
}

export default DivSec