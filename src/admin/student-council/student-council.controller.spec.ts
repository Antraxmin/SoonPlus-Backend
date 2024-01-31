import { Test, TestingModule } from '@nestjs/testing';
import { StudentCouncilController } from './student-council.controller';

describe('StudentCouncilController', () => {
  let controller: StudentCouncilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentCouncilController],
    }).compile();

    controller = module.get<StudentCouncilController>(StudentCouncilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
