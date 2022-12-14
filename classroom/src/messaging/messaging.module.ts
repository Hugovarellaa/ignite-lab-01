import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CourseService } from '../services/course.service';
import { EnrollmentService } from '../services/enrollment.service';
import { StudentService } from '../services/student.service';
import { PurchaseController } from './controllers/purchases.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentService, CourseService, EnrollmentService],
})
export class MessagingModule {}
