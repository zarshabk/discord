'use client';
import React from 'react'
 
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
import { Input } from "@/components/ui/input"
import { CardDescription, CardTitle } from './ui/card';
import useRegister from '@/hooks/useRegister';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password:z.string().min(5,).max(8),
});



const RegisterForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email:"",
          password:""
        },
      })
     
      const {loading,registerUser} = useRegister();
      async function onSubmit(values: z.infer<typeof formSchema>) {
        
        const resp = await registerUser(values);

        if(resp){
            toast.success(resp.message);
            form.reset()
            router.push('/login')
        }
       
      }
  return (
<Form {...form} >
      <div className='w-full divide-y divide-dashed'>
      <form  className="space-y-2 w-full lg:p-20 md:p-10 p-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className='text-center'>
            <CardTitle>Register</CardTitle>
            <CardDescription>Lorem ipsum, dolor sit amet consect</CardDescription>
        </div>
        <FormField
          
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
      </form>
      </div>
    </Form>
  )
}

export default RegisterForm
