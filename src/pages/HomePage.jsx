import React from 'react'
import Hero from '../components/hero.jsx'
import HomeCards from '../components/HomeCards.jsx'
import JobListings from '../components/JobListings.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';

const HomePage = () => {
  return (
    <> 
        <Hero />
        <JobListings  isHome={true}/>
        <HomeCards />
        <ViewAllJobs />
    </>
  )
}

export default HomePage