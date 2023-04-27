import React, { useState, useEffect } from 'react';
import Background from '../assets/images/weather.jpg';

interface WeatherData {
  name: string;
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
  };
}

function Weather() {
  const [zipcode, setZipcode] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (zipcode) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=ba60157c2e54221234b101ae10d0f276&units=imperial`
        );
        const data = await response.json();
        setWeatherData(data);
      }
    }
    fetchData();
  }, [zipcode]);

  function getWeatherData(zip: string) {
    setZipcode(zip);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (zipcode) {
      getWeatherData(zipcode);
      setZipcode("");
    }
  }

  return (
    <div style={{ backgroundImage: `url(${Background})`}} className="flex justify-center mx-auto bg-cover bg-fixed h-screen">
      <div className='flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Zipcode"
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
              className="rounded-l-md py-2 px-4 border-t border-b border-l text-gray-800 border-gray-200 bg-white"
            />
            <button type="submit" className="px-4 rounded-r-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-200">Get Weather</button>
          </div>
        </form>
        {weatherData && weatherData.weather && weatherData.weather[0] && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{weatherData.name}</h2>
            <p className="text-lg mb-2">{weatherData.weather[0].description}</p>
            <p className="text-3xl">{weatherData.main.temp} &deg;F</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather

