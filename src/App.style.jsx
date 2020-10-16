import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background: rgb(228,90,208);
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    };

    * {
        box-sizing: border-box;
        font-family: 'Roboto';
    };

`