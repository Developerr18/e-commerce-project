import { useEffect } from "react";

export default function HourlyForecast() {
    const CITY_NAME = "mumbai";
    const API_KEY = "fd0577b3398901abdba5e375cd1478f4";

    useEffect(() => {
        const getWeather = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            console.log(data);
        };

        getWeather();
    }, []);
}
