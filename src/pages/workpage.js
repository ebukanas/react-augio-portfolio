import React from "react"
import { Outlet, Route, Router } from "react-router-dom";
import Header from "../components/header"
// import './styles/main.css';


// TO DO:

// make like a carousel thingie for displaying a single workItem. 
// below it you should still see the entire "home_portfolio" compontent, but it should say "See others" instead of "PORTFOLIO"
//

const WorkPage = () => {
  return (
    <>
    <Header />
    <div className="h-screen w-screen flex flex-col align-center justify-end">
        {/* <Link to={':kernagisId'}>
            <li id="kernagis" className="w-40 h-40">whatup biiiiiatch</li>
        </Link> */}
    <Outlet />
    </div>
    </>
  )
}
export default WorkPage

// const Kernagis = () => {
//     <div>
//         Whatup
//     </div>
// }

