import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weather }) => {
    if (!weather) {
        return <p className="message">Search for a city to see weather details.</p>;
    }

    return (
        <div className="weather-display">
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <p>{weather.weather[0]?.description}</p>
            <p className="temperature">{Math.round(weather.main?.temp)} °C</p>
            <div className="weather-details">
                <p>Humidity: {weather.main?.humidity}%</p>
                <p>Wind: {weather.wind?.speed} m/s</p>
            </div>
            <img
                src={'http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@4x.png'}
                alt="Weather Icon"
            />
        </div>
    );
};
export default WeatherDisplay;