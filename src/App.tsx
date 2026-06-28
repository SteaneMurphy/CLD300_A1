//MUI
import { Box } from '@mui/material';
//components
import Header from './components/header/header.tsx';
import Hero from './components/hero/hero.tsx';
import FlightSearchBar from './components/flightSearchBar/flightSearchBar.tsx';
import TrustPilot from './components/misc/trustPilot.tsx';
import Footer from './components/footer/footer.tsx';
import Promotional from './components/promotional/promotional.tsx';
//assets
import { PromotionalFlightDeals, PromotionalRecommended } from "./constants/constants.ts";



/*
  This component is the main entry-point to the app and serves as the defacto 'front-page'. In a production
  application this page would link to a router object and serve the specific page being requested. For the time
  being, the front-page components are laid out as below.
*/
function App() {

  return (
    <>
      <Header />                                                                      {/* Header component */}
      <Box sx={{ position: 'relative' }}>                                             {/* Hero/Banner component */}
        <Hero />
        <Box
          sx={{
            position: 'absolute',
            top: { xs: -12, md: -40 },
            left: 0,
            right: 0,
            zIndex: 3,
          }}
        >                                                                             {/* Searchbar Positioning for overlap */}
          <FlightSearchBar />                                                         {/* Searchbar component */}
        </Box>
      </Box>
      <TrustPilot />                                                                  {/* TrustPilot component */}
      <Promotional 
        heading={"Hot flight deals for you!"} 
        disclaimer={true} 
        content={PromotionalFlightDeals}
        priceTicker={true} />                                                         {/* Flight Deals promo component */}
      <Promotional 
        heading={"Deals recommended for you"} 
        disclaimer={false} 
        content={PromotionalRecommended}        
        longForm={true} />                                                            {/* Recommended Deals promo component */}
      <Footer />
                                                                                      {/* Footer component */}
      {/*

      The following components were planned by could not be finished in time. They include:

      <Promotional />               accomodation deals promo component
      <Promotional />               package holiday deals promo component
      <Promotional />               blog based promo component
      <Reviews />                   trust pilot review area component
      <Deal />                      FlightCentre reward deals component
      <Informational />             FlightCentre specific information component
      
      */}         
    </>
  )
}

export default App
