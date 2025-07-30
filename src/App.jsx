import Navbar from "./components/Navbar.jsx"
import Hero from "./components/hero.jsx"
import HomeCards from "./components/HomeCards.jsx"
import React from 'react'
import JobListing from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const App = () => {
  return ( 
    <>
      <Navbar/>
      
      <Hero/>
    
      <HomeCards/> 

      <JobListing/>

      <ViewAllJobs/>
    </>

  )
};
export default App;
