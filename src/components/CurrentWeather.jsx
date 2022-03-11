import React from "react";

const CurrentWeather = (weatherData) => {
  const { weatherData: info } = weatherData;

  console.log(info);

  return (
    <div className="container">
      <h3 className="mb-4 text-2xl text-gray-700">Current Weather</h3>
      <div className="shadow p-4 rounded bg-white">
        <div className=" grid gap-4 grid-cols-2">
          <div className="flex items-center">
            <div className="text-center">
              <p className="text-xl text-indigo-400 font-bold">
                {info.timezone}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${info.current.weather[0].icon}@4x.png`}
                alt="weather-icon"
              />
              <p className="text-xl text-indigo-400 capitalize">
                {info.current.weather[0].description}
              </p>
            </div>
            <div className="text-5xl text-indigo-500">
              {info.current.temp}&#8451;
            </div>
          </div>

          <div>
            <p className="text-xl text-indigo-400 font-bold pb-8">
              Feels like {info.current.feels_like}&#8451;
            </p>
            <p className="text-indigo-400 ">
              Humidity {info.current.humidity}&#8451;
            </p>
            <p className="text-indigo-400 ">
              Wind Speed {info.current.wind_speed}
            </p>
            <p className="text-indigo-400 ">
              Wind Speed {info.current.pressure}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
