import RegisterForm from '@/components/RegisterForm'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "register",
  description: "Begin your journey with us by registering through our user-friendly platform. Create your account in just a few simple steps and unlock a world of possibilities. Enjoy seamless access to exclusive features, personalized content, and a vibrant community. Join us today and start shaping your digital experience with ease and convenience.",
};
const page = () => {
  return (
    <div className='min-h-screen h-auto flex items-center justify-center'>
       <div className='w-full h-[400px]shadoe-lg shadow-lg dark:bg-slate-900 bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
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
