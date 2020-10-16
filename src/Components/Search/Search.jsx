import React, { useState, useEffect } from 'react';
import { endpoint } from '../../endpoint';
import Results from '../Results/Results';
import BuenosAires from '../Results/BuenosAires';
import { Wrapper, FormWrapper, ResultsWrapper } from './Search.style';

const Search = () => {
    const API_KEY = "efd8d6ced2474250ccdd802afc57c26e";
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState([]);
    const [validQuery, setValidQuery] = useState(false);
    const [ba, setBA] = useState({
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

    useEffect(() => {
        const getBA = async () => {
            try {
                const url = await endpoint.buenosAires(API_KEY);
                const data = await (await fetch(url)).json();
                setBA({
                    temp: data.main.temp,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    feels_like: data.main.feels_like,
                    city: data.name,
                    icon: data.weather[0].icon,
                    title: data.weather[0].main,
                    code: data.code
                })
            } catch(error) {
                alert('error');
            }
        }
        getBA()
    }, [])

    const getWeatherData = async () => {

        try {
            const url = await endpoint.cityWeather(query, API_KEY);
            const data = await (await fetch(url)).json();
            setWeather(
                [
                    ...weather,
                    {
                        temp: data.main.temp,
                        temp_min: data.main.temp_min,
                        temp_max: data.main.temp_max,
                        feels_like: data.main.feels_like,
                        city: data.name,
                        icon: data.weather[0].icon,
                        title: data.weather[0].main,
                        code: data.code
                    }
                ]
            )
            
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Wrapper>
            <header>
                <h1>Weather finder</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city-input">Ingresa una ciudad para conocer su pronóstico</label>
                    <FormWrapper>
                        <input
                            placeholder="enter a city"
                            className="city-search"
                            id="city-input"
                            onChange={updateSearchQuery}
                            aria-controls="dataResults"
                        />
                        <button
                            type="submit"
                            className="material-icons"
                            aria-label="Click here to search the weather"
                            onClick={getWeatherData}
                        >
                            search
                        </button>
                    </FormWrapper>
                </form>
                <p>{!validQuery ? '' : 'Invalid city name.'}</p>
            </header>
            <ResultsWrapper>
                <section>
                    <BuenosAires info={ba} />
                    {weather.length > 0 && weather.map(value => <Results key={value} info={value}/>)}
                </section>   
            </ResultsWrapper>
        </Wrapper>
    )
}

export default Search;