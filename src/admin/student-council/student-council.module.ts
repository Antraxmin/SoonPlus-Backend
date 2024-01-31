import { Module } from '@nestjs/common';
import { StudentCouncilController } from './student-council.controller';
import { StudentCouncilService } from './student-council.service';

@Module({
  controllers: [StudentCouncilController],
  providers: [StudentCouncilService]
})
export class StudentCouncilModule {}
