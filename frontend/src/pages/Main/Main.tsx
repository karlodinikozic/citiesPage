import React, { useState } from 'react';
import useNetworkLayer from '../../hooks/networkLayer/useNetworkLayer';
import { CityData } from '../../hooks/networkLayer/types/types';
import './style.scss'
import Map from './components/Map';

function Main() {

  const [cities, setCities] = useState<CityData[]>([]);

  const  {client} = useNetworkLayer()

  const handleOnClick =async () => {
    const data =   await client.getCityData()
    setCities(data.cities)
  }


  return (
    <div className='Main'>
      Main
      <button onClick={handleOnClick}>Press</button>
      <h1>City Explorer</h1>
        <Map cities={cities}/>


      <div className="city-container">


        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <h2>{city.name}</h2>
            <p><strong>Country:</strong> {city.country}</p>
            <p><strong>Continent:</strong> {city.continent}</p>
            <p><strong>Population:</strong> city.population)</p>
            <p><strong>Founded:</strong> {city.founded}</p>
            <h3>Landmarks:</h3>
            <ul>
              {city.landmarks.map((landmark, index) => (
                <li key={index}>{landmark}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

)
  ;
}

export default Main;