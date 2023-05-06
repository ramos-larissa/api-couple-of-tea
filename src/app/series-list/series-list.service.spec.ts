import { Test, TestingModule } from '@nestjs/testing';
import { SeriesListService } from './series-list.service';

describe('SeriesListService', () => {
  let service: SeriesListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesListService],
    }).compile();

    service = module.get<SeriesListService>(SeriesListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
