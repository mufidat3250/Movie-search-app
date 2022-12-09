import React from 'react'
import NavTab from '../../Components/atoms/Navtab'
import { HomePageWrapper } from './HomePage'
import HeroSection from '../../Components/Molecules/HeroSection'
import MoviesContainer from '../../Components/Molecules/MoviesContainer'

const HomePage = () => {
  return (
    <HomePageWrapper>
        <NavTab/>
        <HeroSection/>
        <MoviesContainer/>
    </HomePageWrapper>
  )
}

export default HomePage