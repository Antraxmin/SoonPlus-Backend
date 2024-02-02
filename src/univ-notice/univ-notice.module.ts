import { Module } from '@nestjs/common';
import { UnivNoticeController } from './univ-notice.controller';
import { UnivNoticeService } from './univ-notice.service';

@Module({
  controllers: [UnivNoticeController],
  providers: [UnivNoticeService]
})
export class UnivNoticeModule {}
