import React from 'react';
import useNetworkLayer from '../../hooks/networkLayer/useNetworkLayer';

function Main() {

  const  {client} = useNetworkLayer()

  const handleOnClick =async () => {
    const data =   await client.getCityData()
    console.log(data.cities);
  }


  return (
    <div>Main
      <button onClick={handleOnClick}>presmee</button>
    </div>

  );
}

export default Main;