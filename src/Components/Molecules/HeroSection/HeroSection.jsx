import styled from "styled-components";
export const HeroSectionWrapper = styled.div`
    background-image : url('/public/images/Rectangle 5.png');
    height: 34.375rem;


.content{
    width: 24rem; 
    font-size:4.5rem;
    color: white;
    /* line-height: 94; */
    font-weight: 700;
    padding-top: 6.8125rem;
    margin-left: 4.8125rem;
}

@media (max-width:834px) {

    background-image : url('/public/images/Rectangle 5.png');
    height: 34.375rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
    width: 24rem; 
    font-size:4.5rem;
    color: white;
    font-weight: 700;
    padding-top: 0rem;
    margin-left: 0rem;
    text-align: center;
}
}
@media (max-width:320px) {

background-image : url('/public/images/Rectangle 5.png');
height:15.3125rem;
display: flex;
justify-content: center;
align-items: center;
.content{
width: 17.0625rem; 
font-size:1.75rem;
color: white;
font-weight: 700;
text-align: center;
padding: 0;
margin: 0;
}
}
`