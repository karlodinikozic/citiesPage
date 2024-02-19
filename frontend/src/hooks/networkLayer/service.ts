import { genericGetRequest } from './genericAPIRequests';
import IService from './IService';


const service: IService  ={
  getCityData: () =>{
    return genericGetRequest('/data')
  }
}

export default service