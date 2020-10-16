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
    const [temp, setTemp] = useState([])


    //utilizo useEffect para poder tener los datos directamente cuando se carga el componente. Usé una función asincrónica para que el componente se cargue cuando esta la información
    useEffect(() => {
        const getForecast = async () => {
            try {
                const res = await fetch(
                    endpoint.forecast(city, API_KEY)
                );
                const data = await res.json();
                //console.log(data);
                setForecast(data);
                document.title = `Pronóstico extendido - ${data.city.name}`
            } catch(err) {
                console.log(err)
            }
        } 
        getForecast();
    }, [city]);

    useEffect(() => {
        const formatTemperature = () => {
            if(!forecast) return;
            let data = forecast.list?.reduce((acc, value) => {
                acc[moment(value.dt_txt).format("dddd")] = acc[moment(value.dt_txt).format("dddd")] === undefined ? ({
                    [moment(value.dt_txt).format("dddd")] : 
                    {
                        temp: value.main.temp, 
                        img: value.weather[0].icon,
                        day: value.dt_txt,
                        weather: value.weather[0].main
                    }}) : ({
                        temp: value.main.temp,
                        img: value.weather[0].icon,
                        day: value.dt_txt,
                        weather: value.weather[0].main
                })
                return acc;
            }, {})
            setTemp(data);
            return data;
        }
        formatTemperature()
    }, [forecast]);

    
    

    return (
        <>
             {
                forecast ? (
                    <ForecastWrapper>
                        <header>
                            <div
                                role="link"
                                tabindex="0"
                                className="link-to-home"
                                onClick={() => history.push("/")}
                            >
                                Volver al inicio
                            </div>
                        </header>
                        <ForecastMain>
                            <h1 role="log" aria-live="polite">Pronóstico extendido para: {forecast.city.name}</h1>
                            <ForecastData>
                            {
                                Object.values(temp).map(value => (
                                    <section>
                                        <p>{moment(value.day).format("dddd")}</p>
                                        <p>{Math.round(value.temp)}<sup aria-hidden="true">°c</sup></p>
                                        <p>{value.weather}</p>
                                        <img src={`http://openweathermap.org/img/wn/${value.img}@2x.png`} alt="" />
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