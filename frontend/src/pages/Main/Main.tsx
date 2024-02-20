import React, { useCallback, useEffect, useRef, useState } from 'react';
import useNetworkLayer from '../../hooks/networkLayer/useNetworkLayer';
import { City } from '../../hooks/networkLayer/types/types';
import CitiesList from './components/cityList/CitiesList';
import CityMap from './components/cityMap/CityMap';
import './style.scss'


function Main() {

  const { client } = useNetworkLayer();
  
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | undefined>(undefined);

  const mapRef = useRef();
  


  const handleOnClick = useCallback(async () => {
    const data = await client.getCityData();
    setCities(data.cities);
  }, [client]);

  useEffect(() => {
    handleOnClick().catch(console.error);
  }, [handleOnClick]);


  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };


  return (
    <>
      <h1>City Explorer</h1>
      <div className="main-container">
        <CitiesList cities={cities} handlePress={handleCityClick} />
        <CityMap selectedCity={selectedCity} />
      </div>
    </>
  );
}

export default Main;