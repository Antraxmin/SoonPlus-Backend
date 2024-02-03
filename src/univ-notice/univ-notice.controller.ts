import { Controller, Get, Param } from '@nestjs/common';
import { AcademicNoticesService } from './service/academic-notice.service';
import { ScholarshipNoticeService } from './service/scholaship-notice.service';
import { DormitoryNoticeService } from './service/dormitory-notice.service';
import { UniversityNoticeService } from './service/university-notice.service';
import { SoftwareNoticeService } from './service/software-notice.service';

@Controller('university-notices')
export class UnivNoticeController {
  constructor(
    private readonly academicNoticesService: AcademicNoticesService,
    private readonly scholarshipNoticesService: ScholarshipNoticeService,
    private readonly dormitoryNoticesService: DormitoryNoticeService,
    private readonly universityNoticeService: UniversityNoticeService,
    private readonly softwareNoticeService: SoftwareNoticeService,
  ) {}
  @Get(':departmentId')
  async getNoticesByDepartment(@Param('departmentId') departmentId: string) {
    try {
      let noticesService;
      let notices;
      switch (departmentId) {
        case '010100':
          noticesService = this.universityNoticeService;
          notices = await noticesService.getUniversityNotices();
          return notices;
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
        case 'software':
          noticesService = this.softwareNoticeService;
          notices = await noticesService.getSoftwareNotices();
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
