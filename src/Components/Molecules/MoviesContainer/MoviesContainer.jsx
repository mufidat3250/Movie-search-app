import styled from "styled-components";

export const MoviesContainerStyle = styled.div`
    padding-top:3.9375rem;
    padding-left: 4.8125rem;
    .input-wrapper{
        margin-bottom:3rem;
        margin-left:4.8125rem;
        margin-right:3.5625rem;       
    }
    .available-movies{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-bottom: 4.1875rem;
    }

    .movies-cards-container{
        display: flex;
        flex-shrink:0;
        flex-grow:1;
        flex-wrap: nowrap;
        overflow-x:auto;
        gap: 13px;    
    }
    .movies-category{
        margin-top: 0.5rem;
        h4{
            font-size: 1.5rem;
        }
    }

    @media (max-width:320px) {
        padding-top:3.5rem;
    padding-left: 0rem;
    .input-wrapper{
        margin-bottom:2.0625rem;
        margin-left:1.75rem;
        margin-right:1.75rem;       
    }
    .available-movies{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-bottom: 4.1875rem;
        padding-left:1.75rem;
    }

    .movies-cards-container{
        display: flex;
        flex-shrink:0;
        flex-grow:1;
        flex-wrap: nowrap;
        overflow-x:auto;
        gap: 13px;    
    }
    .movies-category{
        h4{
            font-size: 1.5rem;
        }
    }

        }
`