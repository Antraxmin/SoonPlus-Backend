import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentCouncilModule } from './admin/student-council/student-council.module';
import { ClubOfficerModule } from './admin/club-officer/club-officer.module';
import { UnivNoticeModule } from './univ-notice/univ-notice/univ-notice.module';
import { UnivNoticeModule } from './univ-notice/univ-notice.module';

@Module({
  imports: [StudentCouncilModule, ClubOfficerModule, UnivNoticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
