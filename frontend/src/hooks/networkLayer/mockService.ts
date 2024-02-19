import { genericGetRequest } from './genericAPIRequests';
import IService from './IService';

const mockService: IService  ={
  getCityData: () =>{
    return genericGetRequest('/data')
  }
}

export default mockService