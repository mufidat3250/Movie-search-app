import styled from "styled-components";
export const InputWrapper = styled.div`
    width: 100%;
    input{
    outline: none;
    width: 100%;
    border: 1px solid black;
    height: 4.8125rem;
    font-size: 1.5rem;
    margin-top: 4px;
    padding-left:1rem;
    }
    label{
        font-size:1.25rem;
    }
    @media (max-width:320px) {
        width: 100%;
    input{
        outline: none;
        width: 100%;
    border: 1px solid black;
    height: 2.125rem;
    font-size: 1rem;
    margin-top: 4px;
    }
    label{
        font-size:0.875rem;
        
    }
    }
`