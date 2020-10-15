import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background: rgb(228,90,208);
        background: linear-gradient(0deg, rgba(228,90,208,1) 0%, rgba(246,225,255,1) 100%);
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Assistant';
    }
`

// export const Container = styled.div`
    
//     width: 100%;
//     box-sizing: border-box;
//     background: rgb(228,90,208);
//     background: linear-gradient(0deg, rgba(228,90,208,1) 0%, rgba(246,225,255,1) 100%);

// `