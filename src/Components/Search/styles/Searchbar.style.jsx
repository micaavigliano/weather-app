import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    border-bottom: 2px solid black;
    width: 80%;
    margin: auto;
    margin-top: 2%;
    button {
        border: none;
        background: transparent;
        cursor: pointer;
        &:focus{
            outline: 2px solid white;
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
            outline: 2px solid white;
        }
        &::placeholder{
            color: black;
        }
    }
`

export const Alert = styled.div`
    background-color: white;
    width: 30%;
    padding: auto;
    margin: auto;
    p {
        color: red;
        font-size: 1.4rem;
    }
`