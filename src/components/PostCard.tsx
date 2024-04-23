import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
type Props = {}

const PostCard = (props: Props) => {
  return (
    <Card className='w-full'>
        <CardHeader>
           <div className="flex justify-between">
             <div className="flex gap-2 items-center">
                  <div>
                     <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                     className="h-[60px] w-[60px] rounded-full object-cover" alt="" />
                  </div>
               <div>
               <CardTitle className="text-lg">John Doe</CardTitle>
               <CardDescription>JohnDooe234@gmail.com</CardDescription>
               </div>
             </div>
             <div>
               <span className="text-[12px]  text-gray-500">22 hours ago</span>
             </div>
           </div>
        </CardHeader>
        
        <CardContent className="divide-y divide-dashed">
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reprehenderit dolore animi distinctio quibusdam debitis eum omnis pariatur. Blanditiis, obcaecati?</CardDescription>
        </CardContent>
      </Card>
  )
}

export default PostCard