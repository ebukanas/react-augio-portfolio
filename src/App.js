import './styles/main.css';

import Header from './components/header';
import Hero from './components/hero';
import HomePortfolio from './components/home_portfolio';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import WorkPage from './pages/workpage';
import Home from './components/home';

function App() {

  return (
<>  
  <Router>
    <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route path='/workpage/:id' element={<WorkPage />} />
    </Routes>
  </Router>
</>
  );
}

export default App;
