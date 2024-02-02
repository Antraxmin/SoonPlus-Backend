import { Test, TestingModule } from '@nestjs/testing';
import { UnivNoticeService } from './univ-notice.service';

describe('UnivNoticeService', () => {
  let service: UnivNoticeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnivNoticeService],
    }).compile();

    service = module.get<UnivNoticeService>(UnivNoticeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
