import { Box } from '@mui/material';
import Header from './components/header/header.tsx';
import Hero from './components/hero/hero.tsx';
import TrustPilot from './components/misc/trustPilot.tsx';
import Footer from './components/footer/footer.tsx';
import Promotional from './components/promotional/promotional.tsx';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <TrustPilot />
      <Promotional heading={"Hot flight deals for you!"} disclaimer={true} />
      <Footer />
      {/* 
      <FlightSearchBar />
      
      
      
      <Promotional />
      <Promotional />
      <Promotional />
      <Promotional />
      <Reviews />
      <Deal />
      <Informational /> */}
    </>
  )
}

export default App
