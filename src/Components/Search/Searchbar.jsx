import React from 'react';
import { FormWrapper } from './styles/Searchbar.style';

const Searchbar = ({ handleSubmit, updateSearchQuery, getWeatherData, query }) => {
    return (
        <>
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
                <p>{!query ? '' : 'Invalid city name.'}</p>
            </header>
        </>
    )
}

export default Searchbar;