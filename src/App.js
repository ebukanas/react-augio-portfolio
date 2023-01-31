import './styles/main.css';

import Header from './components/header';
import Hero from './components/hero';
import HomePortfolio from './components/home_portfolio';
import { useState } from 'react';

function App() {

  // this function is set up to set overlay to hidden when the mobile navbar is opened.
  // it set overflow value to bodyOverlayValue variable which is in from header.js
  const [overflow, setOverflow] = useState('unset')
  const toggleData = (childdata) => {
      setOverflow(childdata);  
  }

  return (
    <div className={`h-screen overflow-${overflow}`}>
        <Header toggleData={toggleData}/>
        <Hero />
        <HomePortfolio />
    </div>

  );
}

export default App;
