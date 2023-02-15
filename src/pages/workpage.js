import React from "react"
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/header"
import WorkPreview from "../components/workpreview";
import { Works } from "../data";


// TO DO:

// make like a carousel thingie for displaying a single workItem. 
// below it you should still see the entire "home_portfolio" compontent, but it should say "See others" instead of "PORTFOLIO"
//

const WorkPage = () => {

    // captures the current URL as an object
    const IDObject = useParams(useLocation());
    // get id from the object, which is the 'url' property in data.js
    const URLName = IDObject.id;
    // map through the Works array and check what id property that element has. 
    // set that id property to the array index that we're targetting and store that element in workItem
    let workItem;
    Works.map((item)=> {
        if (URLName === item.url) {
            workItem = Works[item.id - 1];
        }
    },)
    
    //function to check how many images the array object has
    const sumOfImages = (workItem) => {
        const sum = Object.keys(workItem).filter((key) => key.startsWith("img"));
        return sum.length;
    }
    const imgTotal = sumOfImages(workItem);

    //function to loop through all the images, add them to a div and push them out to the parent div
    let img;
    let images = [];
    const loopImages = (workItem) => {
    for (let i = 0; i < imgTotal; i++) {
        img = { backgroundImage: `url(${workItem[`img${i + 1}`]})` };
        images.push(
            <div style={img} className={`bg-cover bg-top h-full mt-2`} key={i}>
                <p className="font-helvetica text-[0.7em] p-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        );
    }

    return images;
    }



  return (
    <>
    <Header />
    <section className="h-screen w-full flex flex-col px-6 justify-center">
        <div className="h-2/3 w-full">
            <div className="flex justify-between">
                <h1 className="font-futura">{workItem.title}</h1>
                <h2 className="">{workItem.year}</h2>
            </div>
            {loopImages(workItem)}
            <div className="pb-6 bottom-0"></div>
            <WorkPreview/>
        </div>

        {/* <HomePortfolio /> */}


    </section>
    </>
  )
}
export default WorkPage

