import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {

  const [weatherState , setWeatherState] = useState("");

  //Destructureing of data that we gotten from props so that we can directly access them
    const{
        temp,
        humidity,
        pressure,
        main,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    //This useEffect is running whenever main data was changes
    useEffect(() =>{
      // main -------> weatherMood
      //if we have a data in main we runs this swtich statements for showing the icons or weathermood img
        if(main){
            switch (main) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Clear":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Snow":
                    setWeatherState("wi-snow");
                    break;  
                case "Haze":
                     setWeatherState("wi-dust");
                     break;   
                default:
                    setWeatherState("wi-snow");
                    break;
            }
        }
    },[main]);

    // Converting the seconds into time
    let sec = sunset;
    let  date = new Date(sec * 1000);
    let normalTime = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    {/* Our temp card */}
    <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{main}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/*our last 4colunms section*/}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={`wi wi-sunset`}></i>
              </p>
              <p className="extra-info-leftside">
                {normalTime} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>{" "}
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
      
    </>
  )
}

export default WeatherCard
