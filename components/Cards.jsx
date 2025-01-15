'use client';
import { Terminal } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function Cards(props) {
  return (
    <div className="Card w-[320px] relative left-4 top-2">
    <Alert>
      <div onClick={()=>{alert('clicked to delete')}} className="three-dots w-[80px] h-[15px] rounded-md relative bottom-[5px] left-[203px] flex justify-around items-center">
        <div className="red-dots w-[10px] h-[10px] rounded-[50px] bg-red-600"></div>
        <div className="yellow-dots w-[10px] h-[10px] rounded-[50px] bg-yellow-600"></div>
        <div className="green-dots w-[10px] h-[10px] rounded-[50px] bg-green-600"></div>
      </div>
      <Terminal className="h-4 w-4 relative left-[8px] scale-[1.4]" />
      <AlertTitle className="relative bottom-[10px] font-medium">{props.title}</AlertTitle>
      <AlertDescription className="relative bottom-[8px]">
       { /* You can add components to your app using the cli.*/  } 
       {props.description}
      </AlertDescription>
    </Alert>
   </div>
  )
}
