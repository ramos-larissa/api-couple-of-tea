import { Test, TestingModule } from '@nestjs/testing';
import { WhishListService } from './whish-list.service';

describe('WhishListService', () => {
  let service: WhishListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhishListService],
    }).compile();

    service = module.get<WhishListService>(WhishListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
