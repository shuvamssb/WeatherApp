import React,{useState} from "react";
import axios from "axios";

function App() {

const [data,setData]= useState({});
const [location,setLocation] = useState('');

const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6d3035daa1d2373bd62e3beb535790cb`

const searchLocation =(event) =>{
  if (event.key === 'Enter') {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((error) => {
      alert('Enter correct Location');
      setLocation('')
  });
    
    setLocation('')
}
}

  return (
    <>
    
    <div className="app">
    <div className="head">
      <h2>Weather Check</h2>
    </div>
      <div className="search">
        <input 
        value={location}
        onChange={event=>setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'    
        type="text"/>
        </div>
        <div className="container">
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp}°C</h1>:null}
                {/*did if  else because cannot find child in json*/}
              </div>
              <div className="description">
              {data.weather?<p>{data.weather[0].description}</p>:null}
              </div>
            </div>
            

          {data.name !== undefined&&
            <div className="bottom">
              <div className="feels">
                {data.main?<p>{data.main.feels_like}°C</p>:null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
              {data.main?<p>{data.main.humidity}%</p>:null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind?<p>{data.wind.speed}</p>:null}
                <p>Wind Speed</p>
              </div>
            </div>
            }
        </div>
    </div> </>
  );
}

export default App;
