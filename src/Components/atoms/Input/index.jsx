import React from 'react'
import { InputWrapper } from './Input'

const Input = ({setQuery}) => {
  return (
    <InputWrapper>
    <label htmlFor="">Search</label>
    <input type="text" onChange={(e)=> setQuery(e.target.value)}/>
    </InputWrapper>
  )
}

export default Input