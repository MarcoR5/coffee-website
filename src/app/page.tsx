import Image from "next/image";
import Link from "next/link";
import Stepper from "./components/stepper";
import Footer from "./components/footer";
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="w-screen h-20 flex p-2 items-center justify-between text-black">
        <div className="flex items-center"> 
          <Image className="ml-20" src="/logo.png" alt="Logo" height={30} width={40}/>
          <h1 className="text-3xl text-blue ml-2">coffeeroasters</h1>
        </div>
        <div className={`flex mr-20 space-x-5 text-gray-500 ${inter.className}`}>
          <Link href={""}>HOME</Link>
          <Link href={""}>ABOUT US</Link>
          <Link href={"/planPage"}>CREATE YOUR PLAN</Link>
        </div>
      </div>

      {/* hero img with text */}
      <div className="h-200 w-screen pl-20 pr-20">
        <div className="bg-[url(./img/background.png)] ... w-full h-full bg-no-repeat bg-cover bg-center rounded-lg">
          <div className="w-full h-full justify-center flex flex-col ml-20 space-y-10">
            <h2 className="text-7xl">Great Coffee <br /> made simple.</h2>
            <p className={`text-lg text-gray-300 ${inter.className}`}>
              {"Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."}
            </p>
            <button className="w-55 bg-bg p-5 rounded-lg text-lg font-bold ">Create your plan</button>
          </div>
        </div>
      </div>

      {/* collection section*/}
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h2 className="text-center mt-10 text-9xl text-gray-300">our collection</h2>
        <div className="flex space-x-20 -mt-10">
          <div className="w-90 h-150 flex flex-col items-center text-center space-y-10 text-blue">
            <div className="bg-[url(./img/coffee.png)] ... w-50 h-50 bg-no-repeat bg-cover bg-center"></div>
            <h2 className="font-bold text-3xl text-blue">Grand Espresso</h2>
            <p className={inter.className}>
              {"Light and flavorful blend with cocoa and black pepper for an intense experience."}
            </p>
          </div>
          <div className="w-90 h-150 flex flex-col items-center text-center space-y-10 text-blue">
            <div className="bg-[url(./img/coffee.png)] ... w-50 h-50 bg-no-repeat bg-cover bg-center space-y-5"></div>
            <h2 className="font-bold text-3xl text-blue">Planalto</h2>
            <p className={inter.className}>
              {"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."}
            </p>
          </div>
          <div className="w-90 h-150 flex flex-col items-center text-center space-y-10 text-blue">
            <div className="bg-[url(./img/coffee.png)] ... w-50 h-50 bg-no-repeat bg-cover bg-center"></div>
            <h2 className="font-bold text-3xl">Picollo</h2>
            <p className={inter.className}>
              {"Mild and smooth blend featuring notes of toasted almond and dried cherry."}
            </p>
          </div>
          <div className="w-90 h-150 flex flex-col items-center text-center space-y-10 text-blue">
            <div className="bg-[url(./img/coffee.png)] ... w-50 h-50 bg-no-repeat bg-cover bg-center"></div>
            <h2 className={`text-3xl font-bold`}>Danche</h2>
            <p className={inter.className}>
              {"Ethiopian hand-harvested blend densely packed with vibrant fruit notes."}
            </p>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="w-screen h-screen text-center">
        <div className="bg-[url(./img/bg2.png)] ... w-auto h-150 bg-no-repeat bg-cover bg-center ml-20 mr-20 rounded-lg">
          <h1 className="pt-20 text-6xl">Why choose us?</h1>
          <p className={`mt-10 text-xl ${inter.className}`}>
            {"A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give your more impactful experience on every level."}
          </p>
          {/* 3 panels */}
          <div className="flex space-x-15 w-full justify-center mt-30">
            <div className="bg-bg w-[25%] h-100 rounded-lg flex flex-col items-center ">
              <div className="bg-[url(./img/bean.png)] ... w-40 h-50 bg-no-repeat bg-cover bg-center ml-20 mr-20 rounded-lg"></div>
              <h2 className="text-xl font-bold mb-5">Best quality</h2>
              <p className={`text-lg ${inter.className}`}>
                {"Discover an endless variety of the world's best artisan coffee from each of our roasters."}
              </p>
            </div>
            <div className="bg-bg w-[25%] h-100 rounded-lg flex flex-col items-center ">
              <div className="bg-[url(./img/gift.png)] ... w-40 h-50 bg-no-repeat bg-cover bg-center ml-20 mr-20 rounded-lg"></div>
              <h2 className="text-xl font-bold mb-5">Exclusive benefits</h2>
              <p className={`text-lg ${inter.className}`}>
                {"Special offers and swag when you subscribe, including 30% off your first shipment."}
              </p>
            </div>
            <div className="bg-bg w-[25%] h-100 rounded-lg flex flex-col items-center ">
              <div className="bg-[url(./img/shiping.png)] ... w-40 h-50 bg-no-repeat bg-cover bg-center ml-20 mr-20 rounded-lg"></div>
              <h2 className="text-xl font-bold mb-5">Free shipping</h2>
              <p className={`text-lg ${inter.className}`}>
                {"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* steps */}
      <div className="w-screen h-200 pl-60 ">
        <h3 className="text-3xl text-gray-400">How it works</h3>
        <Stepper />
        <button className="w-55 bg-bg p-5 rounded-lg text-lg font-bold mt-15">Create your plan</button>
      </div>

      {/* footer */}
      <div className="w-screen pl-20 pr-20 mb-15">
        <Footer />
      </div>
    </>
  );
}
