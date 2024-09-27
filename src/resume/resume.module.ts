import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service.js';
import { ResumeController } from './resume.controller.js';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
