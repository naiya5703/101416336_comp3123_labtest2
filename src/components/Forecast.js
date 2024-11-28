import React from 'react';
import './Forecast.css';

const Forecast = ({ forecast }) => {
    if (!forecast) return null;

    return (
        <div className="forecast-container">
            <h2>5-Day Forecast</h2>
            <div className="forecast-grid">
                {forecast.list.filter((_, index) => index % 8 === 0).map((day, index) => (
                    <div key={index} className="forecast-card">
                        <h3>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                        <img
                            src={'http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'}
                            alt="Weather Icon"
                        />
                        <p>{Math.round(day.main.temp)} °C</p>
                        <p>{day.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;