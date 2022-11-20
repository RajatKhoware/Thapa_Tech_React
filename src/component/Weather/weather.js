import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./weather_card";

// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=0a88e4fd7063fd3ab14f028e2d1727e6

const Weather = () => {
  //Getting the data from search value and storing it in setSearchValue and default data is Indore
  const [searchValue, setSearchValue] = useState("Indore");
  //Saving the data which we got from the api in setTempInfo ---> tempinfo
  const [tempInfo, setTempInfo] = useState({});
  
  //This function runs when we tap on search button
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0a88e4fd7063fd3ab14f028e2d1727e6`;

      let res = await fetch(url);
      let data = await res.json();

      // Getting the data from api
      const { temp, humidity, pressure } = data.main;
      const { main } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      // Accumulating all the datas from api in one objects\
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        main,
        name,
        speed,
        country,
        sunset,
      };
      
      //Getting the data from api and storing it in setTempInfo
      setTempInfo(myNewWeatherInfo);

    } catch (error) {
      console.log(error);
    }
  };
  
  //This useEffect insure that getWeatherInfo() will runs when we open the website
  useEffect(() => {
    getWeatherInfo();
  });

  return (
    <>
      <div className="wrap">
        {/* Search bar */}
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            id="search"
            autoFocus
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Weather;
