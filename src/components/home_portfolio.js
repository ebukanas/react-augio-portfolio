// import { useRef } from 'react';
import { Works } from '../data';
import { useState, useEffect, forwardRef } from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/main.css';
import '../styles/tailwind.css';
import React from 'react';

// TO DO:
//add hover styling

// Have to use forward ref, because I can't pass the ref directly to the component in home.js
const HomePortfolio = React.forwardRef((props, ref) => {

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

      const navigate = useNavigate();
      const navigateToWorkPage = (url) => {
        navigate(`/workpage/${url}`);
      };


  return (
    <section 
    ref={ref}
    id="portfolio" 
    className="flex flex-col justify-center">
        <h1 className="h-8 w-screen text-center text-xl mb-4 mt-[40px] font-futura font-bold
        lg:mb-14 lg:mt-10
        md:text-[2em] md:mb-10 md:mt-[20px]
        ">PORTFOLIO</h1>
        <div className='font-futura flex justify-around mb-6 text-sm 
        md:text-[1rem] md:justify-center'>
            <button 
            onClick={changeToPhysical} 
            className={`${getClassNames(selectedButton, 'physical')} duration-200 md:px-3 md:pb-1`}>APČIUOPIAMI</button>

            <button 
            onClick={changeToDigital} 
            className={`${getClassNames(selectedButton, 'digital')} duration-200 md:px-3 md:pb-1`}>SKAITMENINIAI</button>
            </div>
            <div className={`h-2/3 w-auto grid grid-rows-2 grid-cols-2 gap-4 mx-4
            md:mx-20 md:grid-cols-[repeat(auto-fit,_minmax(0,1fr))] md:grid-rows-auto md:h-[60%]
            lg:h-1/2 lg:grid-rows-1`}>

            {
            //typeOfWork is defined in the useState hook above. It returns a string, but [] converts it into an object property
            Works
            .filter((workItem) => workItem[typeOfWork])
            .map((workItem) => {
                workItemCounter++;
            const img = {
                backgroundImage: 'url(' + workItem.img1 + ')',
            };

            return (
                <div 
                key={workItem.id}
                className={`${gridElementsSpan ? 'last:col-span-2' : 'last:col-span-1'} md:last:col-span-1 md:row-span-2 cursor-pointer border-2 lg:border-[3px] border-black flex bg-cover bg-top`}
                style={img}>
            <button onClick={() => navigateToWorkPage(workItem.url)}
            className="border-t-2 lg:border-t-[3px] border-black h-8 lg:h-12 w-full font-bold self-end bg-white text-xs 
            lg:text-base">{workItem.title}</button>
                </div>
                
            );
        })}

            </div>
    </section>
  );
  
})
export default HomePortfolio