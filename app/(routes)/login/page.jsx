"use client";
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
import {useRouter} from 'next/navigation';
export default function Login() {
  const [isMounded, setIsMounded] = useState(false);
   const router = useRouter();
  const submit_Handler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const resulted_data = Object.fromEntries(formData.entries());
    const post_result = await fetch('/api/users/loginUser' ,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(resulted_data)
    });
    const post_result_response = await post_result.json();
    if(post_result_response.status == 200) router.replace('/');
    else alert(post_result_response.message);
  };

  useEffect(() => {
    setIsMounded(true);
  }, []);

  if (isMounded !== true) {
    return (
      <div className="login-box-skeleton relative w-[340px] h-[320px] left-2 top-10 loading_animation rounded-md"></div>
    );
  }

  document.title = "Pastebin - Register";
  
  return (
    <Card className="w-[340px] relative left-2 top-10 h-[320px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account in just clicks.</CardDescription>
      </CardHeader>
      <CardContent>
    <form onSubmit={submit_Handler}>
     <div className="grid w-full items-center gap-4">
   {/* Name field */}
  { /*  <div className="flex flex-col space-y-1.5">
    <Label htmlFor="name">Name</Label>
   <Input type="text" name="name" id="name" placeholder="Enter Your name here." required />
  </div> */ }

  {/* Email field */}
  <div className="flex flex-col space-y-1.5">
   <Label htmlFor="email">Email</Label>
   <Input type="email" name="email" id="email" placeholder="Enter Your Email here." required />
  </div>

  {/* Password field */}
 <div className="flex flex-col space-y-1.5">
 <Label htmlFor="password">Password</Label>
 <Input type="password" name="password" id="password" placeholder="Enter Your Password here." required />
 </div>

 {/* Age field */}
 {/* <div className="flex flex-col space-y-1.5">
   <Label htmlFor="age">Age</Label>
   <Input type="number" name="age" id="age" placeholder="Enter Your Age here." required />
   </div> */}
</div>

 <CardFooter className="flex justify-between">
 <Button className="relative top-8 right-4" variant="outline">Cancel</Button>
 <Button className="relative top-8 left-4" type="submit">Register</Button>
  </CardFooter>
 </form>
 </CardContent>
</Card>
  );
}
