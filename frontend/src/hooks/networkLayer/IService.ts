import { CityData } from './types/types';


type citiesType = {
  cities: [CityData]
}

interface IService {
  getCityData: () => Promise<citiesType>;
}

export default IService