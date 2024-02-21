import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';
import * as fs from 'fs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataService],
    }).compile();

    service = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getData', () => {
    it('should return JSON data from file', () => {
      // Mocking environment variable
      process.env.PATH_TO_CITY_JSON = 'path/to/mock/cities.json';

      // Mocking fs.readFileSync to return sample data
      const mockData = [{ name: 'City 1' }, { name: 'City 2' }];
      jest
        .spyOn(fs, 'readFileSync')
        .mockReturnValueOnce(JSON.stringify(mockData));

      const result = service.getData();

      expect(result).toEqual(mockData);
    });

    it('should throw an error if file reading fails', () => {
      // Mocking environment variable
      process.env.PATH_TO_CITY_JSON = 'nonexistent/file.json';

      // Mocking fs.readFileSync to throw an error
      jest.spyOn(fs, 'readFileSync').mockImplementation(() => {
        throw new Error('Error while read cites.json file');
      });

      expect(() => service.getData()).toThrow(
        'Error while read cites.json file',
      );
    });
  });
});
