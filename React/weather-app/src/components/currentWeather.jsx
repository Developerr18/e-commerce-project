import { useState } from "react";

export default function CurrentWeather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = "fd0577b3398901abdba5e375cd1478f4";

    // fetching data
    const fetchWeather = async (cityName) => {
        if (!cityName.trim()) {
            setError("Please enter a city name");
            setWeather(null);
            return;
        }

        // reset state before fetching data
        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error("city not found!");
            }
            const data = await response.json();
            setWeather(data);
            setCity("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // update UI
    return (
        <div className="weather-app">
            <div className="weather-container">
                <h1 className="app-title">Weather Forecast</h1>
                <div className="input-section">
                    <input
                        placeholder="Enter city name..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button
                        disabled={loading}
                        onClick={() => fetchWeather(city)}
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>

                {error && <p className="err-msg">{error}</p>}
                {loading && <p>Loading...</p>}

                {weather && (
                    <div className="weather-card">
                        <div className="weather-header">
                            <h2>
                                {weather.name}, {weather.sys.country}
                            </h2>
                            <p>
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
                                {weather.weather[0].description}
                            </div>
                        </div>

                        <div className="sunrise-sunset">
                            <span className="sunrise-info">
                                Sunrise : {unixToTime(weather.sys.sunrise)}
                            </span>
                            <span className="sunset-info">
                                Sunset : {unixToTime(weather.sys.sunset)}
                            </span>
                        </div>

                        <div className="weather-details">
                            <div className="item-details">
                                <span className="detail-label">Feels Like</span>
                                <span className="detail-value">
                                    {Math.round(weather.main.feels_like)}°C
                                </span>
                            </div>
                            <div className="item-details">
                                <span className="detail-label">Humidity</span>
                                <span className="detail-value">
                                    {weather.main.humidity}%
                                </span>
                            </div>
                            <div className="item-details">
                                <span className="detail-label">Wind</span>
                                <span className="detail-value">
                                    {weather.wind.speed} m/s
                                </span>
                            </div>
                            <div className="item-details">
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
}

////////////////////////////////////////////
function unixToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

/////////////////////////////////////////////////////
/*
async function notGetWeather() {
    // get location key
    const locationRes = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`
    );
    const locationData = await locationRes.json();
    const locationKey = locationData[0]?.Key;

    // get weather forecast
    const weatherRes = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`
    );
    const weatherData = await weatherRes.json();
    console.log(weatherData);
}

const API_KEY = fd0577b3398901abdba5e375cd1478f4;
*/
