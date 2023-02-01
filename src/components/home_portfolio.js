// import { useRef } from 'react';
import { Works } from '../data';
import { useState, useEffect } from 'react';

import '../styles/main.css';
import '../styles/tailwind.css';
import React from 'react';



const HomePortfolio = () => {

    // seperated works into two categories: digital and physical.
    // two buttons will trigger whichever ones will be displayed 
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

    // completely genius function that last grid element to span 2 or 1 based on 
    // whether there is an equal amount of elements or not
    let workItemCounter = 0;
    const [gridElementsSpan, setGridElementsSpan] = useState(false);
    useEffect(() => {
        console.log('workItemCounter % 2 is ' + workItemCounter % 2);
        if (workItemCounter % 2) {
            setGridElementsSpan(true);
            console.log('running setGridElementSpan(2)');
        } else {
            setGridElementsSpan(false);
            console.log('running setGridElementSpan(1)');
        }
    }, [changeToPhysical, changeToDigital, workItemCounter]);

    // this function triggers button style based on which ever one is active
    const getClassNames = (selectedButton, buttonType) => {
        if (selectedButton === buttonType) {
          return 'border-black border-b-2 text-gray-800';
        } else {
          return 'border-transparent border-b-0 text-gray-400';
        }
      };

      

  return (
    <section 
    id="portfolio" 
    className="flex flex-col justify-center">
        <h1 className="h-8 w-screen text-center text-xl mb-4 mt-[40px] font-futura font-bold
        lg:text-[4em] lg:mb-14 lg:mt-2
        md:text-[3em] md:mb-10 md:mt-[20px]
        ">PORTFOLIO</h1>
        <div className='font-futura flex justify-around mb-6 text-sm 
        md:text-[1.4rem] md:justify-center'>
            <button 
            onClick={changeToPhysical} 
            className={`${getClassNames(selectedButton, 'physical')} duration-200 md:px-3 md:pb-1`}>APČIUOPIAMI</button>

            <button 
            onClick={changeToDigital} 
            className={`${getClassNames(selectedButton, 'digital')} duration-200 md:px-3 md:pb-1`}>SKAITMENINIAI</button>
        </div>
            <div className={`h-2/3 w-auto grid grid-rows-2 grid-cols-2 gap-4 mx-4
            md:mx-20 md:grid-cols-[repeat(auto-fit,_minmax(0,1fr))] md:h-full
            lg:h-1/2 lg:grid-rows-1`}>

            {
            //typeOfWork is defined in the useState hook above. It returns a string, but [] converts it into an object property
            Works
            .filter((workItem) => workItem[typeOfWork])
            .map((workItem) => {
                workItemCounter++;
                console.log(workItemCounter);

            const img = {
                backgroundImage: 'url(' + workItem.img1 + ')',
            };

            return (
                <div 
                key={workItem.id} 
                className={`sm:last:col-span-${gridElementsSpan ? '2' : '1'} cursor-pointer border-2 lg:border-4 border-black flex bg-cover bg-top`}
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