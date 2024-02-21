import React from 'react';
import { City } from '../../../../hooks/networkLayer/types/types';
import { List, Typography } from 'antd';
import './style.scss'

interface Props{
  city: City,
  handlePress: (city: City) => void
}

function CityItem({ city,handlePress }: Props) {

  const handleOnClick = () => {
    handlePress(city)
  }

  return (
    <a href='#map'>
    <List.Item className="list-item" style={{width:'100%'}} onClick={handleOnClick}>
      <div className="city-info">
          <Typography.Text className="city-information">City Information</Typography.Text>
          <Typography.Text className="detail-text">Name: {city.name}</Typography.Text>
          <Typography.Text className="detail-text">Country: {city.country}</Typography.Text>
          <Typography.Text className="detail-text population">Population: {city.population}</Typography.Text>
      </div>
    </List.Item>
    </a>
  );
}

export default CityItem;