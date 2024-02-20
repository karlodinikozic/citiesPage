import { City } from '../../../../hooks/networkLayer/types/types';
import React from 'react';
import { List } from 'antd';
import CityItem from './CityItem';
import './style.scss'


interface Props{
  cities: City[];
  handlePress:(city: City) => void;
}

function CitiesList({cities,handlePress}:Props) {

  return (
    <div className="list-container">
      <h2 className="list-heading">Cities</h2>
      <List
        dataSource={cities}
        renderItem={(city) => <CityItem city={city} handlePress={handlePress} />}
      />
    </div>
  )
}

export default CitiesList;