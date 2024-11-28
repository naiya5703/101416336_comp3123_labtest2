import React, { useState } from 'react';
import './App.css';
import { fetchWeather, fetchForecast } from './api';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleSearch = async () => {
        if (!city.trim()) {
            alert("Please enter a valid city name.");
            return;
        }
    
        try {
            const weatherData = await fetchWeather(city);
            const forecastData = await fetchForecast(city);
            setWeather(weatherData);
            setForecast(forecastData);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("City not found. Please check the name and try again.");
            } else {
                alert("An error occurred while fetching weather data. Please try again later.");
            }
            setWeather(null);
            setForecast(null);
        }
    };

    return (
        <div className="app-container">
            <header className="header">
                <h1>Weather Forecast App</h1>
            </header>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <WeatherDisplay weather={weather} />
            <Forecast forecast={forecast} />
        </div>
    );
};

export default App;
