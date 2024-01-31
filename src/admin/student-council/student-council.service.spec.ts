import { Test, TestingModule } from '@nestjs/testing';
import { StudentCouncilService } from './student-council.service';

describe('StudentCouncilService', () => {
  let service: StudentCouncilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentCouncilService],
    }).compile();

    service = module.get<StudentCouncilService>(StudentCouncilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
