import { Controller, Get, Param } from '@nestjs/common';
import { AcademicNoticesService } from './service/academic-notice.service';
import { ScholarshipNoticeService } from './service/scholaship-notice.service';

@Controller('university-notices')
export class UnivNoticeController {
  constructor(
    private readonly academicNoticesService: AcademicNoticesService,
    private readonly scholarshipNoticesService: ScholarshipNoticeService,
  ) {}
  @Get(':departmentId')
  async getNoticesByDepartment(@Param('departmentId') departmentId: string) {
    try {
      let noticesService;
      let notices;
      switch (departmentId) {
        case '010200':
          noticesService = this.academicNoticesService;
          notices = await noticesService.getAcademicNotices();
          return notices;
        case '010300':
          noticesService = this.scholarshipNoticesService;
          notices = await noticesService.getScholarshipNotices();
          return notices;
        default:
          throw new Error('Invalid departmentId');
      }
    } catch (error) {
      console.error(error);
      throw new Error('오류가 발생하였습니다');
    }
  }
}
