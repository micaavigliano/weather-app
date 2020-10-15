import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { endpoint } from './../../endpoint';

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
                    <div>
                        <div
                            onClick={() => history.push("/")}
                        >
                            Volver al inicio
                        </div>
                        <p>{forecast.city.name}</p>
                        {
                            forecast.list.map((value) => (
                                <div>
                                    <p>{value.main.temp}</p>
                                    <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@4x.png`} alt="" />
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>Loading</div>
                )
            } 
        </>
    )
}

export default Forecast;