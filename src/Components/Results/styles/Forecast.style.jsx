import styled from 'styled-components';

export const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: auto;
    margin: auto;
    width: 100vh;
    margin-top: 10%;
    border: 2px solid purple;
    border-radius: 10px;
    header{
        margin-top: 1%;
        height: 1%;
        width: 15%;
        margin-bottom: 10%;
        margin-top: 4%;
        font-size: 1.2rem;
        .link-to-home {
            text-align: center;
            color: white;
            &:focus{
                outline: 2px solid white;
            }
        }
    }
`
export const ForecastMain = styled.main`
    padding: auto;
    margin: auto;
    margin-bottom: 10%;
    width: 100%;
    h1 {
        margin-left: 4%;
    }
`

export const ForecastData = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    section {
        border: 1px solid purple;
        border-radius: 10px;
        margin: auto;
        padding: auto;
        width: 15%;
        text-align: center;
        background: rgb(249,169,237);
        border: 2px solid pink;
        -webkit-box-shadow: 14px 12px 52px 10px rgba(189,147,189,1);
        -moz-box-shadow: 14px 12px 52px 10px rgba(189,147,189,1);
         box-shadow: 14px 12px 52px 10px rgba(189,147,189,1);
    }
`
