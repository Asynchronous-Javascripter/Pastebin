"use client";
// import {cookies} from 'next/headers';
import checkAuth_giveCookie from '../../../lib/check_giveCookie';
import { Textarea } from '../../../components/ui/textarea';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
  import { useState, useEffect } from "react";

export default async function DataCreation() {
  const user_data = await checkAuth_giveCookie();
  const [isMounded, setIsMounded] = useState(false);
    useEffect(() => {
    setIsMounded(true);
  }, []);  

   if (isMounded !== true) {
    return (
      <div className="login-box-skeleton relative w-[340px] h-[320px] left-2 top-10 loading_animation rounded-md"></div>
    );
  } 

  document.title = "Pastebin - Data Creation";
 
  const formHandler =  (event) => {
    event.preventDefault();
   //  const cookieStore = await cookies();
    const formData = new FormData(event.target);
    const data_obj =  Object.fromEntries(formData.entries());
    console.log(data_obj);
    console.log(user_data);
    alert('check console!');
  }
  
  return (
    <Card className="w-[340px] relative left-2 top-10 h-[320px]">
      <CardHeader>
        <CardTitle>Create Your Data</CardTitle>
        <CardDescription>Create a new data in just clicks.</CardDescription>
      </CardHeader>
      <CardContent>
    <form onSubmit={formHandler}>
     <div className="grid w-full items-center gap-4">
   {/* Data title field */}
    <div className="flex flex-col space-y-1.5">
    <Label htmlFor="title">Title</Label>
   <Input type="text" name="title" id="title" placeholder="Enter Your title here." required />
  </div> 
  
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor="description">Description</Label>
 <Textarea name="description" placeholder="Type your description here." />
  </div> 
  
</div>

 <CardFooter className="flex justify-between">
 <Button className="relative top-4 right-4" variant="outline">Cancel</Button>
 <Button className="relative top-4 left-4" type="submit">Submit</Button>
  </CardFooter>
 </form>
 </CardContent>
</Card>
  );
}
