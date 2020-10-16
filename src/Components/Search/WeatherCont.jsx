import React, { useState, useEffect } from 'react';
//componentes
import Searchbar from './Searchbar';
import Results from '../Results/Results';
import BuenosAires from '../Results/BuenosAires';
//endpoint
import { endpoint } from '../../endpoint';
//estilos
import { Wrapper, SectionResults, ResultsWrapper } from './styles/WeatherCont.style';

const Search = () => {
    //pseteo la api key para poder llamarla. Podría haberla guardado en un archivo .env.
    const API_KEY = "efd8d6ced2474250ccdd802afc57c26e";
    //creo los estados
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

    //creo la función handleSubmit para pasarsela al evento onSubmit en el form, para que: 1) no se actualice la página, y 2)para que luego de buscar la query, el input quede vacío y se pueda realizar otra búsqueda
    const handleSubmit = (event) => {
        event.preventDefault();
        event.currentTarget.reset();
    }

    //creo la fnción updateSearchQuery para poder pasarsela al evento onChange. Lo que hace esta función es, cada vez que el input recibe un string, corre la validación y si es cualquier caracter que no sea de la "a" o "A" a la "z" o "Z". Si la validación es 'false' se muestra un cartel con el error
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

    //utilizo useEffect para hacer la llamada al endpoint buenosAires para poder utilizar los datos en el elemento estático que va a recibir los datos de dicha ciudad. Uso particularmente useSEffect porque son datos que quiero ver cuando el componente cargue y no cuando realice la llamada. El uso de la async/await es para poder esperar la data de la api, de otro modo me devolvería el componente vacío

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
                document.title = 'Weather App';
            } catch(error) {
                alert('error');
            }
        }
        getBA()
    }, []);

    // acá declaro una función getWeatherData. Esta función me va a permitir recibir los datos de la ciudad consultada en el input cuando presione el botón 'search'. Por la misma razón que arriba, utilizo una llamada asincrónica 

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
            <Searchbar handleSubmit={handleSubmit} updateSearchQuery={updateSearchQuery} getWeatherData={getWeatherData} query={validQuery} setQuery={setQuery}/>
            <ResultsWrapper>
                <SectionResults>
                    <BuenosAires info={ba} />
                    {weather.length > 0 && weather.map(value => <Results key={value} info={value}/>)}
                </SectionResults>   
            </ResultsWrapper>
        </Wrapper>
    )
}

export default Search;