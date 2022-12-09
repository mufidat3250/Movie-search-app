import React from 'react'
import styled from 'styled-components'

const MovieCardWrappper = styled.div`
    height: 18.75rem;
    width: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: black;
    flex-shrink: 0;
    @media (max-width:320px) {
        height: 12.5rem;
    width: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: black;
    flex-shrink: 0;
    }
`
const MovieCard = () => {
  return (
    <MovieCardWrappper>
            Movie Name
    </MovieCardWrappper>
  )
}

export default MovieCard