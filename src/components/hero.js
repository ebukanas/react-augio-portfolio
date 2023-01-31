import '../styles/main.css';
import '../styles/tailwind.css';

import jumboText from '../images/jumbo-text3.png';


const Hero = () => {
  return (

    <section 
    id="hero" 
    className="bg-purple relative bg-[url('../images/statue.png')] bg-cover bg-blend-hard-light flex flex-col justify-evenly
    sm:items-center md:bg-contain md:bg-no-repeat md:bg-left" 
    data-section="bg-purple">

        <img className="sm:w-2/3 md:w-2/3 lg:w-2/5 2xl:w-[30%]" src={jumboText} alt="" />
        <a href="workpage.html" 
           className="w-2/3 mb-4 h-20 absolute bottom-5 self-center
           md:w-1/2 md:flex md:justify-center">
           <button 
           className="test w-full h-12 bg-transparent border-4 border-white text-white mb-14 font-bold
            md:w-1/2 lg:w-96 hover:scale-105 duration-200">MANO MENAS</button>
        </a>

    </section>
  );
}
export default Hero

