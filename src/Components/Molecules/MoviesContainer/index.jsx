import React from 'react'
import Input from '../../atoms/Input'
import MovieCard from '../../atoms/MovieCard'
import { MoviesContainerStyle } from './MoviesContainer'
const MoviesContainer = () => {
  return (
    <MoviesContainerStyle>
     <div className='input-wrapper'>
     <Input/>
     </div>
     <div className='available-movies'>
     <div className='movies-category'>
        <h4>Movie title</h4>
        <div className='movies-cards-container'>
        {
        Array(10).fill('').map((_)=>  <MovieCard/>)
       }
        </div>
     </div>
     <div className='movies-category'>
        <h4>Movie title</h4>
        <div className='movies-cards-container'>
        {
        Array(1).fill('').map((_)=>  <MovieCard/>)
       }
        </div>
     </div>
     </div>
    </MoviesContainerStyle>
  )
}

export default MoviesContainer