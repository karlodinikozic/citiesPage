import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { City } from '../../../../hooks/networkLayer/types/types';
import { LatLng } from 'leaflet';
import CitySelectedCard from './CitySelectedCard';

interface Props{
  selectedCity: City | undefined
}

function CityMap({ selectedCity }:Props) {

  const munichLatLng = new LatLng(48.1,11.5)



  return (
    <div className='map-container' id='map'>
    <MapContainer center={munichLatLng} zoom={6}  scrollWheelZoom={true} style={{ height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedCity && (
        <Marker  position={[ parseFloat(selectedCity.latitude),parseFloat(selectedCity.longitude)]} />
      )}
      <CitySelectedCard selectedCity={selectedCity}/>
    </MapContainer>
    </div>);
}

export default CityMap;