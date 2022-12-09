import React, { useEffect, useState } from "react";
import NavTab from "../../Components/atoms/Navtab";
import { HomePageWrapper } from "./HomePage";
import HeroSection from "../../Components/Molecules/HeroSection";
import MoviesContainer from "../../Components/Molecules/MoviesContainer";

const HomePage = () => {
    const [data, setData] = useState({})
    const [query, setQuery] = useState('')
    const apiKey = import.meta.env.VITE_API_KEY
  const fetchMovies =  () => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`).then((res)=> res.json()).then((data)=> setData({...data}));
  };
console.log(apiKey)
useEffect(() => {
  fetchMovies()  
}, [])


  return (
    <HomePageWrapper>
      <NavTab />
      <HeroSection />
      <MoviesContainer  query={query} setQuery={setQuery} movies ={data}/>
    </HomePageWrapper>
  );
};

export default HomePage;
