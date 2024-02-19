import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { CityData } from '../../../hooks/networkLayer/types/types';
import CitiesList from './CitiesList';


interface Props{
  cities : CityData[];
}

function Map({ cities }: Props) {


  return (
    // @ts-ignore
    <MapContainer center={[48.1,11.5]} zoom={4} scrollWheelZoom={true} style={{height:"50vh"}} >
      <TileLayer
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/*<Marker position={["51.505"," -0.09"]}>*/}
      {/*  <Popup>*/}
      {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
      {/*  </Popup>*/}
      {/*</Marker>*/}

      <CitiesList cities={cities}/>


    </MapContainer>
  );
}

export default Map;