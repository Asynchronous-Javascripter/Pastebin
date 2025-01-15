"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {useState, useEffect} from 'react';
import {usePathname} from 'next/navigation';
const Navbar = () => {
  const [isMounded, setIsMounded] = useState(false);
  const pathname = usePathname();
  const [pathUrl, setPathUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const urlChecker = () => {
      if(pathname == '/login'){
      setPathUrl('Register');
      setLinkUrl('/register');
    }
    else if(pathname == '/register'){
      setPathUrl('Login');
      setLinkUrl('/login');
    }
    else {
      setPathUrl('Logout');
      setLinkUrl('/logout');
     }
  }
  useEffect(()=>{
    setIsMounded(true);
    urlChecker();
  },[pathname]);
  if(isMounded != true){
    return (<div className=" w-full h-[50px] loading_animation mb-2"></div>);
  }
  return (
    <div className="w-full mb-2 text-white font-serif h-[50px] mb-2 pt-2 bg-black" align="right">
    <Button className="bg-white text-black relative right-2 hover:bg-zinc-700 hover:text-white" asChild>
    <Link href={linkUrl}>{pathUrl}</Link>
    </Button>
    </div>
    );
}

export default Navbar