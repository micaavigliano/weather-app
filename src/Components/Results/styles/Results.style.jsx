import styled from 'styled-components';

export const MainData = styled.div`
    border: 2px solid black;
    padding-bottom: 2%;
    width: 40%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    .link-forecast{
        color: blue;
        cursor: pointer;
        width: 50%;
        padding: auto;
        margin: auto;
        padding: 2% 0 2% 0;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: row;
    padding: auto;
    margin: auto;
    .main-weather{
        margin-right: 10%;
        margin-left: 2%;
    }
    .weather-info{
        margin-top: 2%;
    }
`
