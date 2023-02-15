import { Works } from "../data"
import { useState } from "react";
import { useEffect } from "react";



const WorkPreview = () => {

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

// this function triggers button style based on which ever one is active
const getClassNames = (selectedButton, buttonType) => {
    if (selectedButton === buttonType) {
        return 'border-black border-b-2 text-gray-800';
    } else {
        return 'border-transparent border-b-0 text-gray-400';
    }
};

let workItemCounter = 0;

const [gridToggler, setGridToggler] = useState(false);
useEffect(() => {
    console.log('workItemCounter % 2 is ' + workItemCounter % 2);
    if (workItemCounter % 2) {
        setGridToggler(true);
        console.log('running setGridElementSpan(2)');
    } else {
        setGridToggler(false);
        console.log('running setGridElementSpan(1)');
    }
}, [changeToPhysical, changeToDigital, workItemCounter]);


// if 3 = 1 rows / 3 cols
// if 4 = 2 rows / 2 cols
// if 5 = 3 rows / 2 cols /last span 3
// if 6 = 2 rows / 3 cols 

// set use state to number values. 
// use if (or switch) statements for every numOfItems up to 8
// ( example: if workItemCounter === 3 then set setGridToggler(3))

// then in the div classname set ${gridToggler ? 'grid-rows-1' : 'grid-rows-2'} 


  return (
    <div className="h-auto w-full pb-6">
    <h1 className="font-futura text-center">Žiūrėti kitus:</h1>
        <div className="flex justify-evenly font-futura text-[0.7em] mt-2">
            <button 
            onClick={changeToPhysical} 
            className={`${getClassNames(selectedButton, 'physical')} duration-200 md:px-3 md:pb-1`}>APČIUOPIAMI</button>

            <button 
            onClick={changeToDigital} 
            className={`${getClassNames(selectedButton, 'digital')} duration-200 md:px-3 md:pb-1`}>SKAITMENINIAI</button>
        </div>

{/* try to fix thissssss gridToggler*/}
        <div className={`${gridToggler ? 'grid-rows-1' : 'grid-rows-2'} ${gridToggler ? 'col-span-1' : 'col-span-2'} grid grid-cols-3 w-full justify-evenly mt-4 gap-2 h-[200px]`}>
        {Works.
        filter((workItem) => workItem[typeOfWork])
        .map((workItem) => {
        workItemCounter++;
        console.log(workItemCounter);
        const img = {
            backgroundImage: 'url(' + workItem.img1 + ')',
        };
            return (
                <div 
                key={workItem.id} 
                style={img} 
                className={`h-30 bg-cover bg-center border-black border-[2px]`}></div>
            )
        })}
        </div>
    </div>
  )
}
export default WorkPreview