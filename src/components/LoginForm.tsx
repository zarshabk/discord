'use client';
import React, { useState } from 'react'
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useSession, signIn, signOut } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { CardDescription, CardTitle } from './ui/card';
import useRegister from '@/hooks/useRegister';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

 
const formSchema = z.object({
  
  email: z.string().email(),
  password:z.string(),
});



const LoginForm = () => {
    const router = useRouter();
    const [loading,setLoading]=useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
         
          email:"",
          password:""
        },
      })
     
      
      async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
       try {
        const resp = await signIn('credentials',{
          email:values.email,
          password:values.password
        })
        
        toast.success("login successfull")
        
       } catch (error:any) {
        toast.error(error?.response?.data?.message)
       }

        // if(resp){
        //     toast.success(resp.message);
        //     form.reset()
        //     router.push('/')
        // }
       
      }
  return (
<Form {...form} >
      <div className='w-full divide-y divide-dashed'>
      <form  className="space-y-2 w-full lg:p-20 md:p-10 p-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className='text-center'>
            <CardTitle>Login</CardTitle>
            <CardDescription>Already have an account <Link href={'/register'} className='text-blue-600'>create account</Link> </CardDescription>

        </div>
       
          <FormField
          
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>{loading ? "Submitting":"Submit"}</Button>
        <div className='border-t-[1px] border-spacing-5 w-full flex flex-col gap-1 my-2'>
        <Button onClick={()=>signIn('google')} type="button" className="w-full bg-blue-700 text-white hover:bg-blue-800"> Signin With Google</Button>

          <Button onClick={()=>signIn('github')} type="button" className="w-full bg-black text-white hover:bg-blue-800"> Signin With Github</Button>
      </div>
      </form>
      </div>
    </Form>
  )
}

export default LoginForm
