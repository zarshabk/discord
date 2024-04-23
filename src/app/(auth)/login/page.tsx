import LoginForm from '@/components/LoginForm'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "login",
  description: "Unlock access to your account effortlessly with our secure login page. Seamlessly sign in to manage your profile, explore exclusive content, and stay connected with ease. Experience hassle-free authentication and personalized services tailored just for you. Join us now and embark on a journey of convenience and security.",
};
const page = () => {
  return (
    <div className='min-h-screen h-auto flex items-center justify-center'>
    <div className='w-full h-[400px]shadoe-lg shadow-lg dark:bg-slate-900 bg-gray-50  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='h-full w-full'>
            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/26/startup-593334_1280.jpg" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='h-full w-full flex flex-col items-center'>
          <LoginForm/>
        </div>
    </div>
 </div>
  )
}

export default page
