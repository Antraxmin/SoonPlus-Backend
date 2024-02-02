import { Test, TestingModule } from '@nestjs/testing';
import { UnivNoticeController } from './univ-notice.controller';

describe('UnivNoticeController', () => {
  let controller: UnivNoticeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnivNoticeController],
    }).compile();

    controller = module.get<UnivNoticeController>(UnivNoticeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
