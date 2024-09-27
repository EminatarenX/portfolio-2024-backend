import { Module } from '@nestjs/common';
import { ProjectService } from './project.service.js';
import { ProjectController } from './project.controller.js';
import { UploaderService } from '../services/uploader/s3.service.js';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, UploaderService],
})
export class ProjectModule {}
