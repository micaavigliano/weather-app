import React from 'react';
import { Data, MainData } from './styles/Results.style';
import {useHistory} from 'react-router-dom';


const Results = (props) => {
    const { temp, temp_min, temp_max, feels_like, city, icon, title } = props.info;
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/forecast/${id}`);
    }
    return (
        <MainData>
            <Data>
                <div className="main-weather">
                    <h2>{city}</h2>
                    <h3>{title}</h3>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                </div>
                <div className="weather-info">
                    <p>Temperatura actual: {Math.round(temp)} <sup aria-hidden="true">°c</sup></p>
                    <p>Mínima: {Math.round(temp_min)} <sup aria-hidden="true">°c</sup></p>
                    <p>Máxima: {Math.round(temp_max)} <sup aria-hidden="true">°c</sup></p>
                    <p>Sensación térmica: {Math.round(feels_like)} <sup aria-hidden="true">°c</sup></p>
                </div>
            </Data>
            <div
                tabIndex="0"
                role="link"
                className="link-forecast"
                onKeyPress={() => handleClick(props.info.city)}
                onClick={() => handleClick(props.info.city)}
            >
                Clickeá acá para conocer el pronóstico extendido
            </div>
        </MainData>
    )
}

export default Results;