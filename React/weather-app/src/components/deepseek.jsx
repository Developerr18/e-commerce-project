import React, { useState, useEffect } from "react";
import "./deepseek.css";

const WeatherAppDeepseek = () => {
    const [city, setCity] = useState("london");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = "fd0577b3398901abdba5e375cd1478f4";
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const fetchWeather = async (e) => {
        e?.preventDefault();
        if (!city.trim()) return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error(data.message);
            }

            const data = await response.json();
            setWeather(data);
            setError("");
        } catch (err) {
            console.error(err);
            setError("City not found. Please try another location.");
            setWeather(null);
        } finally {
            setLoading(false);
            setCity("");
        }
    };

    // Optionally fetch weather for default city on initial load
    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div className="weather-app">
            <div className="weather-container">
                <h1 className="app-title">Weather Forecast</h1>

                <form onSubmit={(e) => fetchWeather(e)} className="search-form">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name..."
                        className="city-input"
                    />
                    <button
                        type="submit"
                        className="search-button"
                        disabled={loading}
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </form>

                {error && <p className="error-message">{error}</p>}

                {weather && (
                    <div className="weather-card">
                        <div className="weather-header">
                            <h2 className="city-name">
                                {weather.name}, {weather.sys.country}
                            </h2>
                            <p className="weather-date">
                                {new Date().toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>

                        <div className="weather-main">
                            <div className="temperature-section">
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt={weather.weather[0].description}
                                    className="weather-icon"
                                />
                                <div className="temperature">
                                    {Math.round(weather.main.temp)}°C
                                </div>
                            </div>
                            <div className="weather-description">
                                {weather.weather[0].description
                                    .charAt(0)
                                    .toUpperCase() +
                                    weather.weather[0].description.slice(1)}
                            </div>
                        </div>

                        <div className="weather-details">
                            <div className="detail-item">
                                <span className="detail-label">Feels Like</span>
                                <span className="detail-value">
                                    {Math.round(weather.main.feels_like)}°C
                                </span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Humidity</span>
                                <span className="detail-value">
                                    {weather.main.humidity}%
                                </span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Wind</span>
                                <span className="detail-value">
                                    {weather.wind.speed} m/s
                                </span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Pressure</span>
                                <span className="detail-value">
                                    {weather.main.pressure} hPa
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherAppDeepseek;
