import React, { useEffect, useState } from 'react';
import {  Card } from 'antd';
import { City } from '../../../../hooks/networkLayer/types/types';
import { useMap } from 'react-leaflet';
import { CloseOutlined } from '@ant-design/icons';
import './style.scss'
import { calculateOffsetCoordinates } from '../../../../util/functions';

interface Props{
  selectedCity: City | undefined;
}

function CitySelectedCard({ selectedCity }:Props) {

  const [hiddenCard, setHiddenCard] = useState(false);

  useEffect(() => {
    setHiddenCard(false)
  }, [selectedCity]);

  const map = useMap()

  if(!selectedCity){
    return  <></>
  }

  const cityLat = Number.parseFloat(selectedCity.latitude)
  const cityLng = Number.parseFloat(selectedCity.longitude)
  const xOffset =  window.innerWidth < 576 ? 50 : 0

  const viewCenter = calculateOffsetCoordinates (cityLat,cityLng,xOffset,0,8)

  //Changes the Parent Component Map to a new center
  map.setView(viewCenter,8)

  const handleOnClose = () => {
    setHiddenCard(true)
  }

  return (
      <div className='selected-card-container' hidden={hiddenCard}>
        <Card className='selected-card' title={selectedCity.name} extra={<CloseOutlined onClick={handleOnClose}/>}>
          <p><strong>Country: </strong> {selectedCity.country}</p>
          <p><strong>Continent:</strong> {selectedCity.continent}</p>
          <p><strong>Population:</strong> {selectedCity.population}</p>
          <p><strong>Native name:</strong> {selectedCity.name_native}</p>
          <p><strong>Landmarks:</strong></p>
          <ul>
            {selectedCity.landmarks.map((landmark, index) => (
              <li key={index}>{landmark}</li>
            ))}
          </ul>
        </Card>
      </div>
  );
}

export default CitySelectedCard;