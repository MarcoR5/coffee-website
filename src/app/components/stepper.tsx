import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
export default function Stepper() {
  return (
    <div className="relative w-240 px-0 py-8 ">
      {/* Horizontal line behind circles */}
      <div className="absolute top-13 left-5 right-5 h-1 bg-orange-100" />

      {/* Circles */}
      <div className="flex justify-between items-center relative z-10">
        <div className="w-10 h-10 border-2 border-teal-700 rounded-full bg-white" />
        <div className="w-10 h-10 border-2 border-teal-700 rounded-full bg-white" />
        <div className="w-10 h-10 border-2 border-teal-700 rounded-full bg-white" />
      </div>

      {/* Labels below circles */}
      <div className="mt-10 flex justify-between  relative z-10  text-gray-700  w-300">
        <div className=" space-y-5">
            <h1 className=" text-6xl text-bg2">01</h1>
            <h1 className="text-5xl">Pick your <br /> coffee</h1>
            <p className={inter.className}>Select from our evolving range of artisan <br /> coffees. Our beans are ethically sourced <br />and we pay fair prices for them. There <br />are new coffees in all profiles every <br />month for you to try out.</p>
        </div>
        <div className=" space-y-5 ">
            <h1 className="text-6xl text-bg2">02</h1>
            <h1 className="text-5xl">Choose the <br />frequency</h1>
            <p className={inter.className}>Customize your order frequency, <br /> quantity, even your roast style and grind <br />type. Pause, skip or cancel your <br />subscription with no commitment <br />through our online portal.</p>
        </div>
        <div className=" space-y-5">
            <h1 className="text-6xl text-bg2">03</h1>
            <h1 className="text-5xl">Recieve and <br />enjoy!</h1>
            <p className={inter.className}>We ship tour package within 48 hours, <br />freshly roasted. Sit back and enjoy <br />award-winning world-class coffees <br />curated to provide a distinct tasting <br />experience.</p>
        </div>
 
      </div>
    </div>
  );
}
