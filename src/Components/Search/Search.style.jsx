import styled from 'styled-components';

export const Wrapper = styled.div`
    /* height: 40vh; */
    width: 100vh; 
    border: 2px solid black;
    text-align: center;
    margin: auto;
    padding: auto;
    margin-top: 10%;
    margin-bottom: 10%;
    border-radius: 40px;
    h1 {
        padding-top: 3%;
        font-size: 5.5rem;
        font-weight: lighter;
        color: red;
    }
    
`

export const FormWrapper = styled.div`
    display: flex;
    border-bottom: 2px solid black;
    width: 80%;
    margin: auto;
    button {
        border: none;
        background: transparent;
        color: red;
        cursor: pointer;
        &:focus{
            outline: 2px solid purple;
        }
    }
    input {
        background: transparent;
        border: none;
        padding: 4px;
        outline: none;
        width: 100%;
        color: black;
        font-size: 1.2rem;
        &:focus{
            outline: 2px solid purple;
        }
    }
`

export const ResultsWrapper = styled.main`
    background-color: gray;
    width: 80vh;
    margin: auto;
    padding: auto;
    border: 2px solid transparent;
    margin-bottom: 2%;
    border-radius: 10px;
`
