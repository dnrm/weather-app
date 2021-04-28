import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
    const [city, setCity] = useState("London");
    const [unit, setUnit] = useState("metric");
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");
    const API = "c73eea09d5030ffeaafaed52a3fafa78";

    useEffect(() => {
        try {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${unit}`
            ).then((i) => {
                if (i.status === 200) {
                  return i.json()
                } else {
                  return false;
                }
            })
            .then(i => {
              if (i.main && i.weather) {
                setTemperature(Math.ceil(i.main.temp));
                setWeather(i.weather[0].main);
              }
            });
        } catch (e) {

        }
    }, [city, unit]);

    useEffect(() => {}, [weather]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(
            e.target[0].value.replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
            )
        );
    };

    return (
        <main>
            <Form onSubmit={handleSubmit} />
            <Results
                weather={weather}
                temperature={temperature}
                unit={unit}
                city={city}
            />
        </main>
    );
}

export default App;
