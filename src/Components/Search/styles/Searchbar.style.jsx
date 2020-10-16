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