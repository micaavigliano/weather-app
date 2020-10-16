import styled from 'styled-components';

export const SectionResults = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: grey;
    position: relative;
    width: 95%;
    /* left: -170px; */
    
`

export const Wrapper = styled.div`
    width: 1000px; 
    border: 2px solid black;
    text-align: center;
    margin: auto;
    height: auto;
    padding: auto;
    margin-top: 5%;
    border-radius: 40px;
    h1 {
        margin-top: 1%;
        font-size: 4rem;
        font-weight: lighter;
        color: black;
    }
    label{
        font-size: 1.3rem;
        font-weight: light;
    }
`
export const ResultsWrapper = styled.main`
    width: 85%;
    left: 10px;
    margin: auto;
    padding: auto;
    border: 2px solid transparent;
    margin-bottom: 2%;
    border-radius: 10px;
`
