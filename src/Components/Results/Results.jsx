import React from 'react';
import { Data } from './Results.style';
import {useHistory} from 'react-router-dom';


const Results = (props) => {
    const { temp, temp_min, temp_max, feels_like, desc, city, icon, title } = props.info;
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/forecast/${id}`);
    }
    return (
        <Data>
                    <div>
                        <h2>{city}</h2>
                        <h3>{title}</h3>
                        <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt=""/>
                    </div>
                    <div>
                        <p>{desc}</p>
                        <p>{Math.round(temp)} <sup>°c</sup></p>
                        <p>Min: {Math.round(temp_min)} <sup>°c</sup> <span aria-hidden="true">|</span> Max: {Math.round(temp_max)} <sup>°c</sup></p>
                        <p>Sensación térmica: {Math.round(feels_like)} <sup>°c</sup></p>
                    </div>
                    <div
                        onClick={() => handleClick(props.info.city)}
                    >
                        ir a forecast
                    </div>
        </Data>
    )
}

export default Results;