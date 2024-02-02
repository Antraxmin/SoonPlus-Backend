import { Controller, Get, Param } from '@nestjs/common';
import { AcademicNoticesService } from './service/academic-notice.service';
import { ScholarshipNoticeService } from './service/scholaship-notice.service';
import { DormitoryNoticeService } from './service/dormitory-notice.service';

@Controller('university-notices')
export class UnivNoticeController {
  constructor(
    private readonly academicNoticesService: AcademicNoticesService,
    private readonly scholarshipNoticesService: ScholarshipNoticeService,
    private readonly dormitoryNoticesService: DormitoryNoticeService,
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
        case 'dormitory':
          noticesService = this.dormitoryNoticesService;
          notices = await noticesService.getDormitoryNotices();
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
