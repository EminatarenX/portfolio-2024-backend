import { Module } from '@nestjs/common';
import { BlogService } from './blog.service.js';
import { BlogController } from './blog.controller.js';
import { UploaderService } from '../services/uploader/s3.service.js';

@Module({
  controllers: [BlogController],
  providers: [BlogService, UploaderService],
})
export class BlogModule {}
