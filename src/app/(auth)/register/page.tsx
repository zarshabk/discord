import RegisterForm from '@/components/RegisterForm'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen h-auto flex items-center justify-center'>
       <div className='w-full h-[400px]shadoe-lg shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
           <div className='h-full w-full'>
               <img src="https://cdn.pixabay.com/photo/2015/01/08/18/26/startup-593334_1280.jpg" className='w-full h-full object-cover' alt="" />
           </div>
           <div className='h-full w-full flex flex-col items-center'>
               <RegisterForm/>
           </div>
       </div>
    </div>
  )
}

export default page
