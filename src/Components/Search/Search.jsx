import React, { useState } from 'react';
import { endpoint } from '/Users/micae/weather-app-react/src/endpoint';
import Results from '../Results/Results';
import { Wrapper } from './Search.style';

const Search = () => {
    const API_KEY = "efd8d6ced2474250ccdd802afc57c26e";
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({
        temp: null,
        temp_max: null,
        temp_min: null,
        feels_like: null,
        desc: null,
        city: null,
        icon: null,
        title: null,
        code: null
    })
    const [validQuery, setValidQuery] = useState(false);
    const [forecast, setForecast] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        event.currentTarget.reset();

        //addWeather(value)
    }

    const updateSearchQuery = (event) => {
        let valueQuery = event.target.value;
        let valid = validation(valueQuery);
        setQuery(valueQuery);

        if(valid || valueQuery === '') {
            setValidQuery(false);
        } else {
            setValidQuery(true);
        }
    }

    const validation = (query) => {
        let regex = /[a-zA-Z]/;
        return regex.test(query)
    }

    const getWeatherData = async () => {
        // if(!validQuery || query === '') {
        //     setValidQuery(true);
        //     return;
        // }

        try {
            const url = await endpoint.cityWeather(query, API_KEY);
            const data = await (await fetch(url)).json();
            console.log(data);
            setWeather({
                temp: data.main.temp,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                feels_like: data.main.feels_like,
                desc: data.weather[0].description,
                city: data.name,
                icon: data.weather[0].icon,
                title: data.weather[0].main,
                code: data.code
            })
        } catch(error) {
            alert('error');
        }
    }

    return (
        <Wrapper>
            <header>
                <h1>Weather finder</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city-input">Ingresa una ciudad</label>
                    <input
                        placeholder="enter a city"
                        className="city-search"
                        id="city-input"
                        onChange={updateSearchQuery}
                    />
                    <button
                        type="submit"
                        className="material-icons"
                        aria-label="Click here to search the weather"
                        onClick={getWeatherData}
                    >
                        search
                    </button>
                </form>
                <p>{!validQuery ? '' : 'Invalid city name.'}</p>
            </header>
            <main>
                <p>{query === "" ? "no hay busqueda" : <Results info={weather}/>}</p>
                {/* {
                    Object.values(weather).map(value=><Results key={value} info={weather}/>)
                } */}
            </main>
        </Wrapper>
    )
}

export default Search;