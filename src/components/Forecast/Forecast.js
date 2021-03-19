import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import classes from "./Forecast.module.css";
import NonProfits from "../NonProfits/NonProfits";
import axios from "axios";

function Forecast() {
  let [responseObj, setResponseObj] = useState({});
  let [responseArray, setResponseArray] = useState([]);
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  const uriEncodedCity = encodeURIComponent(city);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  
  
async function getUser(e) {
  e.preventDefault();
    const response = 
      await axios({
        method: 'get',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: `http://localhost:8080/player/points/position?position=${uriEncodedCity}`,
        data: city
      }).then(function (response) {
        console.log(response.data);
      })

        .catch((err) => {
                setError(true);
                setLoading(false);
                console.log(err.message);
              }
        )
    }

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});

    setLoading(true);

    // fetch(
    //   `http://192.168.1.109:8080/nonprofits/city?city=${uriEncodedCity}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       // "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    //       "x-rapidapi-host": "localhost:8080",
    //     },
    //   }
    // )
    
  //     .then((response) => {console.log("response", response)
  //       return response.json()})
  //     .then((response) => {
  //       if (response.cod !== 200) {
  //         throw new Error();
  //       }
  //       setResponseObj(response);
  //       // setResponseArray(responseObj.map(item => {name: item.name; address: item.address}))
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(true);
  //       setLoading(false);
  //       console.log(err.message);
  //     });
  // }
  }
  return (
    <div>
      <h2>Find A Location Near You!!!</h2>
      <form onSubmit={getUser}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label> */}
        <button className={classes.Button} type="submit">
          Find Help
        </button>
      </form>
      <NonProfits
        responseArray={responseArray}
        error={error} //new
        loading={loading} //new
      />
    </div>
  );
}


export default Forecast;
//notes here
