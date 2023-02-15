
import HomePortfolio from './home_portfolio';
import Header from './header';
import Hero from './hero';
import { useInView } from 'react-intersection-observer';

function Home() {

  const { ref, inView, entry } = useInView({ 
    threshold: 1, 
    rootMargin: '70px',
  })

  return (
    <>
    <Header inView={inView} entry={entry}/>
    <Hero />
    <HomePortfolio ref={ref} entry={entry}/>
    </>
  );
}

export default Home