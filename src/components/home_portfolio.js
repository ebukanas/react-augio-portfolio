// import { useRef } from 'react';
import { Works } from '../data';
import { useState } from 'react';

import '../styles/main.css';
import '../styles/tailwind.css';
import React from 'react';



const HomePortfolio = () => {

    const [typeOfWork, setChangeWorkDisplay] = useState('physical');
    const [selectedButton, setSelectedButton] = useState('physical');

    const changeToPhysical = () => {
        setChangeWorkDisplay('physical');
        setSelectedButton('physical');
    }
    const changeToDigital = () => {
        setChangeWorkDisplay('digital');
        setSelectedButton('digital');
    }


    const getClassNames = (selectedButton, buttonType) => {
        if (selectedButton === buttonType) {
          return 'border-black border-b-2 text-gray-800';
        } else {
          return 'border-transparent border-b-0 text-gray-400';
        }
      };

  return (
    <section id="portfolio" className="flex flex-col justify-center">
        <h1 className="h-8 w-screen text-center text-xl lg:text-4xl lg:mb-8 mb-4 mt-[40px] md:mt-[20px] font-futura font-bold">PORTFOLIO</h1>
        <div className='font-futura flex justify-around mb-6 text-sm'>
            <button 
            onClick={changeToPhysical} 
            className={`${getClassNames(selectedButton, 'physical')} duration-200`}>APČIUOPIAMI</button>

            <button 
            onClick={changeToDigital} 
            className={`${getClassNames(selectedButton, 'digital')} duration-200`}>SKAITMENINIAI</button>
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