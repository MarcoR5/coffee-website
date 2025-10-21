// coffee selection subscription page
import Link from "next/link";
import Stepper2 from "../components/stepper2";
import CoffeePicker from "../components/coffeePicker";
import Footer from "../components/footer";
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] });

export default function coffeePicker(){
    return(
        <>
        {/* header */}
    <div className="w-screen h-20  flex p-2 items-center justify-between text-black">
      <div className="flex items-center"> 
        <img className="ml-20" src="logo.png" alt="" height={30} width={40}/>
        <h1 className="text-3xl text-blue ml-2">coffeeroasters</h1>
      </div>
      <div className={`flex mr-20 space-x-5 text-gray-500 ${inter.className}`}>
        <Link href={""}>HOME</Link>
        <Link href={""}>ABOUT US</Link>
        <Link href={"/planPage"}>CREATE YOUR PLAN</Link>
      </div>
    </div>

        {/* hero image */}
        <div className="w-screen h-screen pl-20 pr-20 mt-10">
            <div className="bg-[url(./img/bg3.png)] ... w-full h-[70%] bg-no-repeat bg-cover bg-center rounded-lg ">
            <div className="w-full h-full flex flex-col justify-center ml-20 space-y-10">
                <h1 className="text-7xl">Create a plan</h1>
                <p  className={`text-lg text-gray-300 ${inter.className}`}>Build a subscription plan that best fits your needs. We offer an <br /> assortment of the best artisan coffees from around the globe <br /> delivered fresh to your door.</p>

            </div>
            </div>

        </div>
        {/* coffee selection stepper */}
        <div className="w-screen h-200 ">
                    <div className="bg-[url(./img/bg2.png)] ... w-auto h-150 bg-no-repeat bg-cover bg-center ml-20 mr-20 rounded-lg">
                    <div className="h-full w-full flex items-center ">
                        <Stepper2 />
                    </div>
                    
                    
                    </div>

        </div>
        {/* coffee picker */}
        <div className="w-screen h-750 bg-gray-">
            <CoffeePicker />
             
        </div>
        <div className="pl-20 pr-20 mb-5">
             <Footer /> 
        </div>
      
        </>
    )
}