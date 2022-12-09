import React from 'react'
import Input from '../../atoms/Input'
import MovieCard from '../../atoms/MovieCard'
import { MoviesContainerStyle } from './MoviesContainer'
const MoviesContainer = ({query, setQuery,movies}) => {
    console.log(query)
  return (
    <MoviesContainerStyle>
     <div className='input-wrapper'>
     <Input setQuery={setQuery}/>
     </div>
     <div className='available-movies'>
     <div className='movies-category'>
     <h4>{movies.Genre}</h4>        
        <div className='movies-cards-container'>
        {
        Array(10).fill('').map((_, index)=>  <MovieCard img={movies.Poster} key={index}/>)
       }
        </div>
     </div>
     </div>
    </MoviesContainerStyle>
  )
}

export default MoviesContainer