import mockService from './mockService';
import service from './service';

const useNetworkLayer = (isMock: boolean = false) => {

  const client = isMock ? mockService : service


  return {client}

}

export default useNetworkLayer