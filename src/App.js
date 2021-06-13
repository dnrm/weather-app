import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";
import Sidebar from './components/Sidebar';
import anime from "animejs";
import firebase, { db } from './firebase'

function App() {
    const [tempCity, setTempCity] = useState('');
    const [city, setCity] = useState("");
    // eslint-disable-next-line
    const [unit, setUnit] = useState("metric");
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");
    const API = "c73eea09d5030ffeaafaed52a3fafa78";

    useEffect(() => {
        anime({
            targets: ["#cover"],
            width: 0,
            duration: 100,
            easing: "easeInOutQuad",
        });

        anime({
            targets: [".form"],
            duration: 2000,
            keyframes: [{ opacity: 0 }, { opacity: 1 }],
        });

        anime({
            targets: [".results"],
            duration: 3000,
            keyframes: [{ opacity: 0 }, { opacity: 1 }],
        });

        anime({
            targets: ['body'],
            backgroundColor: 'white'
        })
    }, []);

    useEffect(() => {
        db.collection("cities")
            .add({
                city: city,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
            })
            .then((r) => console.log(r.id))
            .catch((i) => console.log(i));
        try {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${unit}`
            )
                .then((i) => {
                    if (i.status === 200) {
                        return i.json();
                    } else {
                        return false;
                    }
                })
                .then((i) => {
                    if (i.main && i.weather) {
                        setCity(i.name);
                        setTemperature(Math.ceil(i.main.temp));
                        setWeather(i.weather[0].main);
                    }
                });
        } catch (e) {}
    }, [city, unit])

    const handleSubmit = (e) => {
        anime({
            targets: [".results"],
            duration: 1000,
            keyframes: [{ opacity: 0 }, { opacity: 1 }],
            easing: "linear",
        });
        e.preventDefault();
        setCity(
            e.target[0].value.replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
            )
        );
    };

    const handleClick = (i) => {
        setTempCity(i.city)
    }

    const handleChange = (e) => {
        setTempCity(e.target.value)
    }

    return (
        <>
            <div id="cover"></div>
            <main>
                <Sidebar onClick={handleClick} />
                <Form onSubmit={handleSubmit} city={tempCity} onChange={handleChange} />
                <Results
                    weather={weather}
                    temperature={temperature}
                    unit={unit}
                    city={city}
                />
            </main>
        </>
    );
}

export default App;
