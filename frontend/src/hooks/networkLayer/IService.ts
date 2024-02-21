import { City } from './types/types';

type citiesType = {
  cities: [City]
}

interface IService {
  getCityData: () => Promise<citiesType>;
}

export default IService