import React from "react";
function Weather(props) {
  const date= (props.date).slice(10,)
  return (
    <div className="weather">
    <h2> Time : {date}</h2>
    <p> {props.desc}</p>
      <h3> Max Temperature:{props.max} </h3>
      <h3> Min Temperature :{props.min} </h3>
    </div>
  );
}
export default Weather;
