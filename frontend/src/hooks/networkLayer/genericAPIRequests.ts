
// Define the type for the response data
import client from './client';
import { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;

}


export const genericGetRequest = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await client.get(url) ;
    console.log(response.data);
    // Check if the response status is successful
    if (response.status >= 200 && response.status < 300) {
      return response.data.data; // return only the data part of the response
    } else {
      throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
    }
  } catch (error: any) {//TODO remove this
    throw new Error(`Error fetching data: ${error.message}`);
  }
};



