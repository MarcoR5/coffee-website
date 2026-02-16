'use client'
import { Inter } from 'next/font/google'
import { useState } from 'react';
export default function CoffeePicker(){
    // const inter = Inter({ subsets: ['latin'] })

    const [prefrence, setPrevrence] = useState(null);
    const [bean, setBean] = useState(null);
    const [amount, setAmount] = useState(null);
    const [grind, setGrind] = useState(null);
    const [deliver, setDeliver] = useState(null);
   

    const [done, setDone] = useState(false);
    

    const finalChoice = () => {
        if(prefrence && bean && amount && grind && deliver != null){
            setDone(true)
            alert("Thank you for you order!")
        }
        else{
            alert("Please select all options before creating plan")
           
        }
        
    }

  


    
    return(
        <>
        <div className='h-full'>
            <div className="flex pl-30 pr-30 h-full">
            {/* left */}
            <div className="w-100 space-y-10 h-100  text-2xl ml-10 text-gray-500">
                <h2 className={`${prefrence !== null ? 'text-blue':'text-gray-500'}`}>01 Prefrence</h2>
                <hr />
                <h2 className={`${bean !== null ? 'text-blue':'text-gray-500'}`}>02 Bean Type</h2>
                <hr />
                <h2 className={`${amount !== null ? 'text-blue':'text-gray-500'}`}>03 Quantity</h2>
                <hr />
                <h2 className={`${grind !== null ? 'text-blue':'text-gray-500'}`}>04 Grind Option</h2>
                <hr />
                <h2 className={`${deliver !== null ? 'text-blue':'text-gray-500'}`}>05 Deliveries</h2>
            </div>
            {/* right */}
            <div className="w-full h-150  ml-30 ">
                 <h1 className="text-4xl text-gray-500">How do you drink your coffee?</h1>
                {/* 3 column */}
                <div  className=" flex space-x-10 mt-10 text-blue">
                    <div  onClick={() => setPrevrence('Capsule')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${prefrence === 'Capsule' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className="text-3xl">Capsule</h1><p className={inter.className}>Compatible with <br /> Nespresso systems and <br /> similar brewers</p>
                    </div>
                    <div  onClick={() => setPrevrence('Filter')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${prefrence === 'Filter' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Filter</h1><p  className={inter.className}>For pour over or drip <br /> methods like Aerospress, <br /> Chemex, and V60</p>
                    </div>
                   <div  onClick={() => setPrevrence('Espresso')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${prefrence === 'Espresso' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Espresso</h1><p  className={inter.className}>Dense and finely ground <br /> beans for an intense, <br /> flavourful experience</p>
                    </div>
                    
                </div>

                <h1 className="text-4xl text-gray-500 mt-30">What type of coffee?</h1>
                {/* 3 column */}
                <div  className=" flex space-x-10 mt-10 text-blue">
                    <div  onClick={() => setBean('Single')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${bean === 'Single' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className="text-3xl">Single Origin</h1><p className={inter.className}>Distinct, high quality <br />coffee from a specific <br /> family-owned farm</p>
                    </div>
                    <div  onClick={() => setBean('Decaf')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${bean === 'Decaf' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Decaf</h1><p  className={inter.className}>Just like regular coffe, <br />except the caffience has <br />been removed</p>
                    </div>
                   <div onClick={() => setBean('Blended')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${bean === 'Blended' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Blended</h1><p  className={inter.className}>Combination of two or <br /> three dark roasted <br /> beans of organic coffees</p>
                    </div>
                    
                </div>

                <h1 className="text-4xl text-gray-500 mt-30">How much would you like?</h1>
                {/* 3 column */}
                <div  className=" flex space-x-10 mt-10 text-blue">
                    <div  onClick={() => setAmount('250g')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${amount === '250g' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className="text-3xl">250g</h1><p className={inter.className}>Perfect for the solo <br />drinker. Yields about 12 <br />delicious cups.</p>
                    </div>
                    <div  onClick={() => setAmount('500g')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${amount === '500g' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>500g</h1><p  className={inter.className}>Perfect option for a <br />couple. Yields about 40 <br />delectable cups.</p>
                    </div>
                   <div  onClick={() => setAmount('1000g')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${amount === '1000g' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>1000g</h1><p  className={inter.className}>Perfect for offices and <br /> events. Yields about 90 <br /> delightful cups.</p>
                    </div>
                    
                </div>

                 <h1 className="text-4xl text-gray-500 mt-30">Want us to grind them?</h1>
                {/* 3 column */}
                <div  className=" flex space-x-10 mt-10 text-blue">
                    <div  onClick={() => setGrind('Wholebean')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${grind === 'Wholebean' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className="text-3xl">Wholebean</h1><p className={inter.className}>Best choice if you <br />cherish the full sensory <br />exerience</p>
                    </div>
                    <div  onClick={() => setGrind('Filter')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${grind === 'Filter' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Filter</h1><p  className={inter.className}>For drip or pour-over <br />coffee methods such as <br />V60 or Aeropress</p>
                    </div>
                   <div  onClick={() => setGrind('Cafetiere')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${grind === 'Cafetiere' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Cafetiere</h1><p  className={inter.className}>Course ground beans <br />specially suited for <br />french press coffee</p>
                    </div>
                    
                </div>

                <h1 className="text-4xl text-gray-500 mt-30">How often should we deliver?</h1>
                {/* 3 column */}
                <div  className=" flex space-x-10 mt-10 text-blue">
                    <div onClick={() => setDeliver('every week')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${deliver === 'every week' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className="text-3xl">Every week</h1><p className={inter.className}>$14 per shipment. <br />Includes free first-class <br /> shipping.</p>
                    </div>
                    <div onClick={() => setDeliver('every 3 weeks')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${deliver === 'every 3 weeks' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Every 3 weeks</h1><p  className={inter.className}>$17.25 per shipment. <br />Includes free priority <br />shipping.</p>
                    </div>
                   <div  onClick={() => setDeliver('every month')} className={`text-left  w-70 h-80 p-10 flex flex-col  space-y-10 rounded-xl 
                        ${deliver === 'every month' ? 'bg-bg text-white' : 'bg-bg3 '}`}>
                        <h1 className='text-3xl'>Every month</h1><p  className={inter.className}>$22.50 per shipment. <br />Includes free priority <br />shipping.</p>
                    </div>
                    
                </div>
                {/* done messaged */}
               <div className='w-full h-70 flex flex-col '>
                    
                        <div className="bg-[url(./img/bg2.png)] ... w-230 h-70 bg-no-repeat bg-cover bg-center mt-10 rounded-lg p-10">
                        <h3 className={`text-gray-300 text-lg ${inter.className}`}>ORDER SUMMARY</h3>
                        <h2 className='text-4xl'>"I drink my coffee as {prefrence}, with a {bean} type of bean. {amount} ground ala {grind}, sent to me  {deliver}"</h2>                
                    </div>
                   
                    
                     
                </div> 
                  <button onClick={finalChoice} className="w-55 bg-bg p-5 rounded-lg text-lg font-bold mt-10 ">Create your plan</button>
                  
                    
                 
            </div>
           
        </div>
        <div>
                
        </div>
                   
        </div>
        
              

        </>
    )
}