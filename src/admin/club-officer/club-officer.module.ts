import { Module } from '@nestjs/common';
import { ClubOfficerController } from './club-officer.controller';
import { ClubOfficerService } from './club-officer.service';

@Module({
  controllers: [ClubOfficerController],
  providers: [ClubOfficerService]
})
export class ClubOfficerModule {}
