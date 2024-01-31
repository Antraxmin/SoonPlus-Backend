import { Test, TestingModule } from '@nestjs/testing';
import { ClubOfficerController } from './club-officer.controller';

describe('ClubOfficerController', () => {
  let controller: ClubOfficerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClubOfficerController],
    }).compile();

    controller = module.get<ClubOfficerController>(ClubOfficerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
