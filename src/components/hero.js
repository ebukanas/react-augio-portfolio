import '../styles/main.css';
import '../styles/tailwind.css';
import { NavLink } from "react-router-dom";

import jumboText from '../images/jumbo-text3.png';


const Hero = () => {
  return (

    <section 
    id="hero" 
    className="bg-purple relative bg-[url('../images/galva7.jpg')] items-center bg-cover bg-center bg-blend-hard-light flex flex-col justify-evenly
    md:bg-contain md:bg-no-repeat md:bg-left md:bg-cover md:bg-[url('../images/galva10.jpg')]
    lg:bg-cover" 
    data-section="bg-purple">

        <img className="md:w-1/2 lg:w-2/5 2xl:w-[30%]" src={jumboText} alt="" />
        <a href="workpage.html" 
           className="w-2/3 mb-4 h-20 absolute bottom-5 text-center
           md:w-1/2 md:flex md:justify-center">
           <button 
           className="w-2/3 h-10 bg-transparent border-[3px] border-white text-white mb-14 font-bold hover:scale-105 duration-200
            md:w-52 md:h-10 lg:w-70">MANO DARBAI</button>
        </a>
        {/* <NavLink to="/workpage">Workpage </NavLink> */}

    </section>
  );
}
export default Hero

