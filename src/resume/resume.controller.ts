import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ResumeService } from './resume.service.js';
import { CreateResumeDto } from './dto/create-resume.dto.js';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }

  @Get('')
  findOne() {
    return this.resumeService.findOne();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeService.remove(id);
  }
}
