import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { endpoint } from './../../endpoint';
import moment from 'moment';
import { ForecastWrapper, ForecastData, ForecastMain } from './styles/Forecast.style';

const Forecast = () => {
    const API_KEY = "efd8d6ced2474250ccdd802afc57c26e";
    const history = useHistory();
    const { city } = useParams();
    const [forecast, setForecast] = useState();

    useEffect(() => {
        const getForecast = async () => {
            try {
                const res = await fetch(
                    endpoint.forecast(city, API_KEY)
                );
                const data = await res.json();
                console.log(data);
                setForecast(data);
                document.title = `Pronóstico extendido - ${data.city.name}`
            } catch(err) {
                console.log(err)
            }
        } 
        getForecast()
    }, [city])

    return (
        <>
             {
                forecast ? (
                    <ForecastWrapper>
                        <header>
                            <a
                                href="/"
                                onClick={() => history.push("/")}
                            >
                                Volver al inicio
                            </a>
                        </header>
                        <ForecastMain>
                            <h1>Pronostico extendido para: {forecast.city.name}</h1>
                            <ForecastData>
                            {
                                forecast.list.map((value) => (
                                    <div>
                                        <p>{value.main.temp}</p>
                                        <p>{moment(value.dt_txt).format("dddd")}</p>
                                        <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@4x.png`} alt="" />
                                    </div>
                                ))
                            }
                            </ForecastData>
                        </ForecastMain>
                    </ForecastWrapper>
                ) : (
                    <div>Loading</div>
                )
            } 
        </>
    )
}

export default Forecast;