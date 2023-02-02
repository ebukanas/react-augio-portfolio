import React from "react"
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/header"
import { Works } from "../data";


// TO DO:

// make like a carousel thingie for displaying a single workItem. 
// below it you should still see the entire "home_portfolio" compontent, but it should say "See others" instead of "PORTFOLIO"
//

const WorkPage = ( ) => {

    // captures the current URL as an object
    const IDObject = useParams(useLocation());
    // get id from the object, which is the 'url' property in data.js
    const URLName = IDObject.id;
    // map through the Works array and check what id property that element has. 
    // set that id property to the array index that we're targetting and store that element in workItem
    let workItem;
    Works.map((item)=> {
        if (URLName === item.url) {
            workItem = Works[item.id];
        }
    },)
    
    const img = {
        backgroundImage: `url(${workItem.img1})`
    };

  return (
    <>
    <Header />
    <section className="h-screen w-screen flex flex-col px-6 justify-center">
        <div className="h-1/2 w-full">
            <div
            style={img}
            className={`md:last:col-span-1 md:row-span-2 cursor-pointer border-2 lg:border-[3px] border-black flex bg-cover bg-top h-full`}>
                <button className="border-t-2 lg:border-t-[3px] border-black h-8 lg:h-12 w-full font-bold self-end bg-white text-xs 
                    lg:text-base">{workItem.title}</button>
            </div>
        </div>
    </section>
    </>
  )
}
export default WorkPage

