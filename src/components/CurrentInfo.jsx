import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

//current weather info
const CurrentInfo = (weatherData) => {
  const { weatherData: info } = weatherData;

  console.log(info);

  return (
    <div className="container flex justify-between">
      <div>
        <div className="pb-4">
          <p className="text-6xl text-gray-800">10:20 PM</p>
        </div>

        <div className="pb-6">
          <p className=" text-3xl text-gray-700">Monday, 23 March</p>
        </div>

        <div className="shadow p-4 max-w-xs bg-white rounded-lg">
          <p className="flex justify-between">
            Humidity: <span>{info.current.humidity}%</span>
          </p>

          <p className="flex justify-between">
            Pressure: <span>{info.current.pressure}</span>
          </p>

          <p className="flex justify-between">
            Windspeed: <span>{info.current.wind_speed}</span>
          </p>
        </div>
      </div>

      <div>
        <div className="text-3xl flex items-center pb-3">
          <FaMapMarkerAlt />
          {info.timezone}
        </div>

        <div className="flex justify-end gap-1">
          <p>{info.lat}</p>
          <p>{info.lon}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentInfo;
