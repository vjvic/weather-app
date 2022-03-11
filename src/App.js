import React, { useEffect, useState } from "react";
import { Header, CurrentInfo, Weather, CurrentWeather } from "./components";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async () => {
    setIsLoading(true);

    const url = "https://api.openweathermap.org/data/2.5/onecall?";
    const lat = 12.879721; //static lat
    const lon = 121.774017; //static lon

    const response = await fetch(
      `${url}lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    );

    const data = await response.json();

    setWeatherData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <Header />
      {/*   {!isLoading && <CurrentInfo weatherData={weatherData} />} */}
      {!isLoading && <CurrentWeather weatherData={weatherData} />}
      {!isLoading && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
