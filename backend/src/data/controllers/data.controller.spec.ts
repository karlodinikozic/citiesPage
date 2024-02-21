import { Test, TestingModule } from '@nestjs/testing';
import { DataController } from './data.controller';
import { DataService } from '../services/data.service';
import { HttpStatus } from '@nestjs/common';

describe('DataController', () => {
  let controller: DataController;
  let dataService: DataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataController],
      providers: [DataService],
    }).compile();

    controller = module.get<DataController>(DataController);
    dataService = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GetData', () => {
    it('should return data successfully', async () => {
      const mockData = [{ name: 'City 1' }, { name: 'City 2' }];
      jest.spyOn(dataService, 'getData').mockReturnValueOnce(mockData);

      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await controller.GetData(responseMock);

      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK);
      expect(responseMock.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should handle errors and return 500 status code', async () => {
      const errorMessage = 'Error occurred';
      jest.spyOn(dataService, 'getData').mockImplementationOnce(() => {
        throw new Error(errorMessage);
      });

      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await controller.GetData(responseMock);

      expect(responseMock.status).toHaveBeenCalledWith(
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
      expect(responseMock.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

});
