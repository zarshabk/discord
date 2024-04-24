import PostCard from "@/components/PostCard";
import RelatedPost from "@/components/RelatedPost";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import User from "@/models/user";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const s = getServerSession()
  console.log("SESSION",s)
  return (
<section className="py-5">
<div className="flex lg:flex-row md:flex-row flex-col gap-2">
    <div className="w-full flex flex-col gap-2 ">
     <PostCard/>
     <PostCard/>
     <PostCard/>
     <PostCard/>
     <PostCard/>
     <PostCard/><PostCard/>
     <PostCard/>
     <PostCard/><PostCard/>
    </div>
    <div className="lg:w-1/2 md:w-1/2 w-full ">
       <Card>
         <CardHeader>
            <CardTitle>Related Questions</CardTitle>
         </CardHeader>
         <CardContent>
         <div className="flex flex-col gap-2">
          
             <RelatedPost/>
             <RelatedPost/>
             <RelatedPost/>
             <RelatedPost/>
             

         </div>
         </CardContent>
       </Card>
    </div>
</div>
</section>
  );
}
