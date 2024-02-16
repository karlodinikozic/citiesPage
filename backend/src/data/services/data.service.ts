import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class DataService {
  getData(): any {
    try {
      const jsonData = fs.readFileSync('data/cities.json');
      return JSON.parse(jsonData.toString());
    } catch (error) {
      console.error('Error while read cites.json file', error);
      throw new Error('Error while read cites.json file');
    }
  }
}
