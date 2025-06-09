// const API_KEY = fd0577b3398901abdba5e375cd1478f4;

import React, { useState, useEffect } from "react";

const WeatherAppChatGPT = () => {
    const [city, setCity] = useState("Delhi"); // Default city
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = "fd0577b3398901abdba5e375cd1478f4";

    // ⏰ useEffect: fetch weather for default city on mount
    useEffect(() => {
        fetchWeather(city);
    }, []);

    // 🔁 Async fn: can be used by both useEffect and button
    const fetchWeather = async (cityName) => {
        if (!cityName) {
            setError("Please enter a city name");
            setWeather(null);
            return;
        }

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            const data = await response.json();
            setWeather(data);
            setCity("");
        } catch (err) {
            setError(`❗ ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // 🟦 UI render
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>🌦️ Hybrid Weather App</h2>

            <div style={styles.inputSection}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={styles.input}
                />
                <button
                    onClick={() => fetchWeather(city)}
                    style={styles.button}
                >
                    Get Weather
                </button>
            </div>

            {loading && <p style={styles.loading}>Loading...</p>}
            {error && <p style={styles.error}>{error}</p>}

            {weather && (
                <div style={styles.resultBox}>
                    <h3>
                        {weather.name}, {weather.sys.country}
                    </h3>
                    <p>🌡️ Temp: {weather.main.temp} °C</p>
                    <p>💧 Humidity: {weather.main.humidity}%</p>
                    <p>🌬️ Wind: {weather.wind.speed} m/s</p>
                    <p>🌥️ Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        fontSize: "30px",
        marginBottom: "20px",
    },
    inputSection: {
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        width: "200px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 20px",
        marginLeft: "10px",
        backgroundColor: "#2196f3",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    loading: {
        fontStyle: "italic",
        color: "#444",
    },
    error: {
        color: "red",
        marginTop: "10px",
    },
    resultBox: {
        marginTop: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "inline-block",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minWidth: "300px",
    },
};

export default WeatherAppChatGPT;
