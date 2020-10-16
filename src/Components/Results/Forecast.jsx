import React, { useState, useEffect } from 'react';
// react router
import { useHistory, useParams } from 'react-router-dom';
// endpoint
import { endpoint } from './../../endpoint';
//utilicé la librería moment para parsear fechas y horarios
import moment from 'moment';
//estilos
import { ForecastWrapper, ForecastData, ForecastMain } from './styles/Forecast.style';

const Forecast = () => {
    //api key, lo mismo que en WeatherCont
    const API_KEY = "efd8d6ced2474250ccdd802afc57c26e";
    //utilizo useHistory() para poder hacer un onClick y volver a la URL anterior, en este caso la home
    const history = useHistory();
    //utilizo useParams() de react router para poder pasarselo al endpoint como key, luego al document.title para poder actualizar el title del browser. Esto último sirve para pasar el criterio 2.4.2: pagle title WCAG 2.1
    const { city } = useParams();
    //seteo los estados
    const [forecast, setForecast] = useState();


    //utilizo useEffect para poder tener los datos directamente cuando se carga el componente. Usé una función asincrónica para que el componente se cargue cuando esta la información
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
    }, [city]);


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
                            <h1 role="log" aria-live="polite">Pronóstico extendido para: {forecast.city.name}</h1>
                            <ForecastData>
                            {
                                forecast.list.map((value) => (
                                    <section>
                                        <p>{moment(value.dt_txt).format("dddd")}</p>
                                        <p>{moment(value.dt_txt).format("LT")}</p>
                                        <p>{value.weather[0].main}</p>
                                        <p>{Math.round(value.main.temp)}<sup aria-hidden="true">°c</sup></p>
                                        <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} alt="" />
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