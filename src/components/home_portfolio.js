// import { useRef } from 'react';
import { Works } from '../data';
import { useState } from 'react';

import '../styles/main.css';
import '../styles/tailwind.css';
import React from 'react';



const HomePortfolio = () => {

    const [typeOfWork, setChangeWorkDisplay] = useState('physical');
    const changeToPhysical = () => {
        setChangeWorkDisplay('physical')
    }
    const changeToDigital = () => {
        setChangeWorkDisplay('digital')
    }


  return (
    <section id="portfolio" className="flex flex-col justify-center">
        <h1 className="h-8 w-screen text-center text-xl lg:text-4xl lg:mb-8 mb-4 mt-[40px] md:mt-[20px] font-futura font-bold">PORTFOLIO</h1>
        <div className='font-futura flex justify-around mb-6 text-sm'>
            <button 
            onClick={changeToPhysical}
            className={`duration-200
                        border-${typeOfWork === 'physical' ? 'black' : 'transparent'} 
                        border-b-${typeOfWork === 'physical' ? '2' : '0'}
                        text-gray-${typeOfWork === 'physical' ? '800' : '400'}`}>APČIUOPIAMI</button>
            <button 
            onClick={changeToDigital}
            className={`duration-200
                        border-${typeOfWork === 'digital' ? 'black' : 'transparent'} 
                        border-b-${typeOfWork === 'digital' ? '2' : '0'}
                        text-gray-${typeOfWork === 'digital' ? '800' : '400'}`}>SKAITMENINIAI</button>
        </div>
            <div id="works" className={`work-display h-2/3 lg:h-1/2 w-auto grid grid-rows-2 grid-cols-2 gap-4 mx-4
            md:mx-20 lg:grid-rows-1 lg:grid-cols-4`}>

                    {
                    //typeOfWork is defined in the useState hook above. It returns a string, but [] convert it into an object property
                    Works
                    .filter((workItem) => workItem[typeOfWork])
                    .map((workItem) => {
                        // console.log(workItem.digital);
                    const img = {
                        backgroundImage: 'url(' + workItem.img1 + ')',
                    };
                    // console.log('test is' + test);
                    return (
                        <div 
                        key={workItem.id} 
                        className="cursor-pointer border-2 lg:border-4 border-black flex bg-cover bg-top"
                        style={img}>
                    <button className="border-t-2 lg:border-t-4 border-black h-8 lg:h-12 w-full font-bold self-end bg-white text-xs 
                    lg:text-base">{workItem.title}</button>
                        </div>
                        
                    );
                })}

            </div>
    </section>
  );
  
}
export default HomePortfolio