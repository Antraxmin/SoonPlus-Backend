import { Module } from '@nestjs/common';
import { UnivNoticeController } from './univ-notice.controller';
import { AcademicNoticesService } from './service/academic-notice.service';
import { ScholarshipNoticeService } from './service/scholaship-notice.service';
import { DormitoryNoticeService } from './service/dormitory-notice.service';

@Module({
  controllers: [UnivNoticeController],
  providers: [
    AcademicNoticesService,
    ScholarshipNoticeService,
    DormitoryNoticeService,
  ],
})
export class UnivNoticeModule {}
