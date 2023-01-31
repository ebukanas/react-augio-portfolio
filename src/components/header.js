import '../styles/main.css';
import '../styles/tailwind.css';

import { useState } from 'react';


const Header = ( {toggleData} ) => {


    //used to change the navbar background color, logo color and navbutton color
    const [color, setColor] = useState(false)
    const [logo, setLogo] = useState(false)
    const [icons, setIcons] = useState(false)
    const [mobileNavButton, setmobileNavButton] = useState(false)
    const [mobileNavText, setmobileNavText] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= (window.innerHeight - 160)) {
            setColor(true);
            setLogo(true);
            setmobileNavButton(true);
            setmobileNavText(true);
            setIcons(true);
        } else {
            setColor(false);
            setLogo(false);
            setmobileNavButton(false);
            setmobileNavText(false);
            setIcons(false);
        }
    }
    window.addEventListener('scroll', changeNav);
    
    let bodyOverlayValue = "hidden";
    //used to toggle the menu button on mobile and open up the navigation
    const [state, setState] = useState("hidden");
    const toggleMenu = (logo) => {
        console.log('menu clicked');
        // value when opening the menu
        if (state === 'hidden') {
            setState("w-full h-screen");
            setLogo(true);
            toggleData('hidden');
        // values when closing the menu
        } else {
            setState('hidden');
            setLogo(false);
            toggleData('unset');
        }
    }
    
  return (
    <header 
    className={`${color ? 'bg-white' : 'bg-transparent'} w-full h-16 md:h-20 fixed z-50 flex justify-between lg:h-[7rem] shadow-md duration-150 backdrop-filter backdrop-blur-sm font-futura`}>
        <div className="md:px-0 h-full w-full mx-4 flex justify-between items-center">
            {/* <!-- Medium resolution upwards contact info --> */}
            <ul className={` text-${mobileNavText ? 'black' : 'white'} hidden md:flex md:flex-col w-50 md:w-[250px]`}>
                <li className="py-2 flex">
                    <div id="email" className={`bg-contain w-5 h-5 mt-1 bg-${icons ? 'emailBlack' : 'emailWhite'}`} data-email></div>
                    <a href="mailto:augustinas.pietaris@gmail.com"><span className="mt-1 mx-3 text-sm">augustinas.pietaris@gmail.com</span></a>
                </li>
                <li className="py-2 flex md:-mt-2">
                    <div id="phone" className={`bg-${icons ? 'phoneBlack' : 'phoneWhite'} bg-contain w-5 h-5 mt-1`} data-phone></div>
                    <a href="tel:+37068716994"><span className="text-sm mt-2 mx-3">+370 687 169 94</span></a>
                </li>
            </ul>

{/* <div className='bg-logoBlack h-10 w-10 bg-contain'></div>
<div className='bg-logoWhite h-10 w-10 bg-contain'></div> */}

{/* <div className='bg-emailWhite h-10 w-10 bg-contain'></div>
<div className='bg-phoneWhite h-10 w-10 bg-contain'></div> */}


            {/* <!-- Logo Here --> */}
            <a className={`bg-${logo ? 'logoBlack' : 'logoWhite'} duration-300 h-9 w-36 bg-no-repeat bg-contain z-50
            md:w-[180px] md:h-[54px]
            lg:w-[270px] lg:h-[80px]`}></a>

            {/* <!-- medium resolution and upwards navigation --> */}
            <ul className={` text-${mobileNavText ? 'black' : 'white'} hidden md:flex md:w-[250px] md:flex-col md:text-right `}>
                <li className="py-2"><a className="text-md" href="">APIE MANE</a></li>
                <li className=""><a className="text-md" href="workpage.html">MANO DARBAI</a></li>
            </ul>

            {/* <!-- mobile menu links here --> */}
            <div id="menu" className={`absolute backdrop:fixed top-0 right-0 ${state}`}
            >
            <ul className="top-0 right-0 w-full h-screen py-16 z-50 font-bold flex flex-col justify-center bg-hero2 bg-left-top bg-no-repeat bg-[size:500px] overflow-hidden bg-blue bg-blend-luminosity
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 md:mt-4 md:w-[120px] md:text-right text-black">

                <li className="md:hidden fixed top-4 flex flex-col w-full justify-between px-4">
                    <button type="button" className="text-right text-4xl mr-2 self-end -mt-2"
                        onClick={toggleMenu}>&times;</button>
                </li>

            <div className="px-8 -mt-16">
                <h1 className="text-2xl my-3 text-center font-futura">NAVIGUOJAM!</h1>
                <li className="mt-4 py-2 border-4 border-black flex justify-center bg-white"><a className="text-md" href="#">APIE MANE</a></li>
                <li className="mt-4 py-2 border-4 border-black flex justify-center bg-white"><a className="text-md" href="#">MANO DARBAI</a></li>

                <h1 className="text-2xl my-3 text-center pt-4 font-futura">SUSISIEKIAM!</h1>
                <ul>
                    <li id="email" className="py-2 border-4 border-black mt-4 flex justify-center bg-white">
                        <span className="block ml-0.5 mt-px h-6 w-6 bg-emailBlack bg-contain" alt="email address"/>
                        <span className="mt-px mx-3">augustinas@augis.lt</span>
                    </li>
                    <li id="phone" className="py-2 border-4 border-black mt-4 flex justify-center bg-white">
                        <span className="block ml-0.5 mt-px h-6 w-6 bg-phoneBlack bg-contain" alt="phone number"/>
                        <span className="mt-px mx-3">+370 678 64 334</span>
                    </li>
                </ul>
            </div>
                
            </ul>
            </div>

{/* this button doesnt work after you toggle once. its not clicking */}
        <div className="flex md:hidden items-center z-96">
            <button className={` text-${mobileNavButton ? 'black' : 'white'} text-4xl font-bold hover:opacity-100 duration-300 mb-3`}
                onClick={() => {toggleData(bodyOverlayValue); toggleMenu()}}>
                &#9776;
            </button>

        </div>

        </div>
    </header>
  );
}

export default Header