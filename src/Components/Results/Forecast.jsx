import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { endpoint } from './../../endpoint';
import moment from 'moment';
import { ForecastWrapper, ForecastData, ForecastMain } from './styles/Forecast.style';

const Forecast = () => {
    const API_KEY = "efd8d6ced2474250ccdd802afc57c26e";
    const history = useHistory();
    const { city } = useParams();
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const getForecast = async () => {
            try {
                const res = await fetch(
                    endpoint.forecast(city, API_KEY)
                );
                const data = await res.json();
                console.log(data);
                setForecast([
                    ...forecast,
                    {
                        date: data.list.dt_txt,
                        hour: data.list.dt,
                        name: data.list.dt_txt,
                        temp: data.list.main.temp,
                        icon: data.list.weather[0].icon
                    }
                ]);
                document.title = `Pronóstico extendido - ${data.city.name}`
            } catch(err) {
                console.log(err)
            }
        } 
        getForecast()
    }, [forecast, city]);

    const daysByHour = forecast.map((day) => {
        const dt = new Date(day.dt * 1000);
        return {
            date: dt,
            hour: dt.getHours(),
            name: moment(day.dt_txt).format("dddd"),
            temp: Math.round(day.main.temp),
            icon: day.weather[0].icon,
        };
    });

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
                            <h1>Pronóstico extendido para: {forecast.name}</h1>
                            <ForecastData>
                            {/* {
                                // forecast.list.map((value) => (
                                //     <section>
                                //         <p>{moment(value.dt_txt).format("dddd")}</p>
                                //         <p>{value.main.temp}<sup aria-hidden="true">°c</sup></p>
                                //         <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} alt="" />
                                //     </section>
                                // ))
                                daysByHour.map((day, index) => (
                                    <section key={index}>
                                            <p>{moment(day.dt_txt).format("dddd")}</p>
                                            <p>{day.temp}<sup aria-hidden="true">°c</sup></p>
                                            <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="" />
                                    <section />
                                    ))
                            } */}
                            {
                                daysByHour.map((day, index) => (
                                    <section key={index}>
                                        <p>{moment(day.dt_txt).format("dddd")}</p>
                                        <p>{day.temp}<sup aria-hidden="true">°c</sup></p>
                                        <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="" />
                                    </section>
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