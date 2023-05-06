import { Test, TestingModule } from '@nestjs/testing';
import { AnimesListService } from './animes-list.service';

describe('AnimesListService', () => {
  let service: AnimesListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimesListService],
    }).compile();

    service = module.get<AnimesListService>(AnimesListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
