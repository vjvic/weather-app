import React from "react";
import { format } from "date-fns";

const Weather = (weatherData) => {
  const {
    weatherData: { daily },
  } = weatherData;

  const splicedData = daily.slice(1);

  return (
    <div className="container pt-10">
      <h3 className="mb-4 text-2xl text-gray-700">Forecast</h3>
      <div className="mt-5 grid gap-4 grid-cols-7 justify-center items-center">
        {splicedData.map((w) => (
          <div
            className="shadow p-3 rounded-lg bg-white mx-auto text-center w-full"
            key={w.dt}
          >
            <p className="bg-indigo-500 rounded-full text-slate-100 w-14 mx-auto ">
              {format(new Date(w.dt * 1000), "eee")}
              {/* {new Date(w.dt * 1000).toString()} */}
            </p>
            <img
              className="mx-auto"
              src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />

            <div className="text-gray-600 mt-2">
              <p>Day - {w.temp.day}&#8451;</p>
              <p>Night - {w.temp.night}&#8451;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
