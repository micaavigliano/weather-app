import styled from 'styled-components';

export const MainData = styled.div`
    border: 2px solid pink;
    -webkit-box-shadow: 14px 12px 52px 10px rgba(189,147,189,1);
    -moz-box-shadow: 14px 12px 52px 10px rgba(189,147,189,1);
    box-shadow: 14px 12px 52px 10px rgba(189,147,189,1);
    padding-bottom: 2%;
    width: 40%;
    border-radius: 20px;
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    background: rgb(249,169,237);
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
export const Link = styled.div`
    &:focus{
        outline: 2px solid purple;
    }
`