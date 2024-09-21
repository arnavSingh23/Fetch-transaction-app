import { Test, TestingModule } from '@nestjs/testing';
import { AddPointsDto } from "../dto/add-points.dto";
import { TransactionsService } from "../transactions.service";
import { SpendPointsDto } from "../dto/spend-points.dto";
import { BadRequestException } from '@nestjs/common';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should add points correctly', () => {
    const addPointsDto: AddPointsDto = { payer: 'DANNON', points: 1000, timestamp: new Date().toISOString() };
    service.addPoints(addPointsDto);
    expect(service.getBalance()).toEqual({ DANNON: 1000 });
  });

  it('should spend points correctly', () => {
    const addPointsDto: AddPointsDto = { payer: 'DANNON', points: 1000, timestamp: new Date().toISOString() };
    service.addPoints(addPointsDto);

    const spendPointsDto: SpendPointsDto = { points: 500 };
    const result = service.spendPoints(spendPointsDto);
    expect(result).toEqual([{ payer: 'DANNON', points: -500 }]);
    expect(service.getBalance()).toEqual({ DANNON: 500 });
  });

  it('should not allow spending more points than available', () => {
    const spendPointsDto: SpendPointsDto = { points: 500 };
    expect(() => service.spendPoints(spendPointsDto)).toThrow(BadRequestException);
  });
});
