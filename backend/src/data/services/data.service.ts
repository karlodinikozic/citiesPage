import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as process from 'process';

@Injectable()
export class DataService {
  getData(): any {
    const pathToJson = process.env.PATH_TO_CITY_JSON;

    try {
      const jsonData = fs.readFileSync(pathToJson);
      return JSON.parse(jsonData.toString());
    } catch (error) {
      console.error('Error while read cites.json file', error);
      throw new Error('Error while read cites.json file');
    }
  }
}
