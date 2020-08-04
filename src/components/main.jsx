import React from "react";
import Weather from "./weather";
function Main(props) {

  const { data } = props;
  if (!data || data.length === 0) return <p>No data</p>;
  const repos= data.list
  return (
    <ul>
    <div class="row">
      {repos.map((repo) => {
        return (
            <div class="col-3 col-lg-4">
            <Weather max={repo.main.temp_min} min ={repo.main.temp_max} date={repo.dt_txt} desc= {repo.weather[0].description}/>
          </div>
        );
      })}
        </div>
    </ul>
  );
}

export default Main;
