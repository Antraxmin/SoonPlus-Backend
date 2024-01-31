import { Test, TestingModule } from '@nestjs/testing';
import { ClubOfficerService } from './club-officer.service';

describe('ClubOfficerService', () => {
  let service: ClubOfficerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubOfficerService],
    }).compile();

    service = module.get<ClubOfficerService>(ClubOfficerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
