import { CityData } from '../../../hooks/networkLayer/types/types';
import CitiesItem from './CitiesItem';

interface Props{
  cities: CityData[];
}

function CitiesList({cities}:Props) {

  return <> {cities.map((city,index) => <CitiesItem city={city} index={index}/>) }</>
}

export default CitiesList;