import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeather = async (city) => {
    try {
        console.log("Making API call for:", city);
        const response = await axios.get('${BASE_URL}weather', {
            params: {
                q: city,
                appid: process.env.REACT_APP_API_KEY,
                units: 'metric',
            },
        });
        console.log("API Response (Weather):", response.data);
        return response.data;
    } catch (error) {
        console.error("Error in fetchWeather:", error.response?.data || error.message);
        throw error;
    }
};

export const fetchForecast = async (city) => {
    try {
        console.log("Making API call for forecast:", city);
        const response = await axios.get('${BASE_URL}forecast', {
            params: {
                q: city,
                appid: process.env.REACT_APP_API_KEY,
                units: 'metric',
            },
        });
        console.log("API Response (Forecast):", response.data);
        return response.data;
    } catch (error) {
        console.error("Error in fetchForecast:", error.response?.data || error.message);
        throw error;
    }
};