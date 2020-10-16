import styled from 'styled-components';

export const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: auto;
    margin: auto;
    width: 100%;
    header{
        margin-top: 1%;
        height: 1%;
        width: 50%;
        a {
            a:focus{
                outline: 2px solid red;
            }
        }
    }
`
export const ForecastMain = styled.main`
    margin-top: 5%;
    position: relative;
    left: -5%;
    margin-bottom: 10%;
`

export const ForecastData = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 10px;
`
