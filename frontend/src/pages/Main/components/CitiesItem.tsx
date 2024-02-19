import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { CityData } from '../../../hooks/networkLayer/types/types';
import { LatLng } from 'leaflet';

interface Props{
  city: CityData,
  index: number,
  // handleMakerPress: () => void
}

function CitiesItem({ city,index }: Props) {

  const map = useMap()
  const cityLatLong= new LatLng(Number.parseFloat(city.latitude),Number.parseFloat(city.longitude))

  const handleOnClick = () => {
    map.setView(cityLatLong,10)

  }

  return (
    <Marker position={cityLatLong} >
      <Popup>
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
          <button onClick={handleOnClick}>Center</button>
        </div>
      </Popup>
    </Marker>

  );
}

export default CitiesItem;