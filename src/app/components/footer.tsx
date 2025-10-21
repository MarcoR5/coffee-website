import Link from "next/link";
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
export default function Footer(){
    return(
        <>
        <div className="w-full h-50 bg-blue border-white flex items-center justify-between">
           
        
        <div className={`flex flex-row items-center  text-gray-400 `}>
        <img className="ml-20" src="logo.png" alt="" height={30} width={40}/>
        <h1 className="text-3xl text-white ml-2">coffeeroasters</h1>
        <div className={`space-x-15 ${inter.className} ml-50`}>
        <Link href={""}>HOME</Link>
        <Link href={""}>ABOUT US</Link>
        <Link href={""}>CREATE YOUR PLAN</Link>
        </div>
         
        </div>
       {/* logos */}
        <div className="flex pr-10 space-x-5">
            <img src="/facebook.png" width={50} height={50} alt="" />
            <img src="/instagram.png" width={50} height={50} alt="" />
            <img src="/x.png" width={50} height={50} alt="" />
          
        </div>
      
        </div>
            </>
    )
}