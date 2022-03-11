import React from "react";
import { format } from "date-fns";

const WeatherItem = (w) => {
  return (
    <div className="shadow p-3 rounded-lg bg-white mx-auto text-center w-full">
      <p className="bg-indigo-500 rounded-full text-slate-100 w-14 mx-auto">
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
  );
};

export default WeatherItem;
