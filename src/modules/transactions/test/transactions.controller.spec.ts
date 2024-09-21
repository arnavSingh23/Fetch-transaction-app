import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from "../transactions.service";
import { AddPointsDto } from "../dto/add-points.dto";
import { SpendPointsDto } from "../dto/spend-points.dto";
import { TransactionsController } from "../transactions.controller";

describe('TransactionsController', () => {
  let controller: TransactionsController;
  let service: TransactionsService;

  const addPointsDto: AddPointsDto = { payer: 'DANNON', points: 1000, timestamp: new Date().toISOString() };
  const spendPointsDto: SpendPointsDto = { points: 500 };
  const balance = { DANNON: 1000 };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        {
          provide: TransactionsService,
          useValue: {
            addPoints: jest.fn().mockResolvedValue(undefined),
            spendPoints: jest.fn().mockResolvedValue(undefined),
            getBalance: jest.fn().mockReturnValue(balance),
          },
        },
      ],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should call addPoints on the service', async () => {
    controller.addPoints(addPointsDto);
    expect(service.addPoints).toHaveBeenCalledWith(addPointsDto);
  });

  it('should call spendPoints on the service', async () => {
    controller.spendPoints(spendPointsDto);
    expect(service.spendPoints).toHaveBeenCalledWith(spendPointsDto);
  });

  it('should return the balance', () => {
    expect(controller.getBalance()).toEqual(balance);
    expect(service.getBalance).toHaveBeenCalled();
  });
});
