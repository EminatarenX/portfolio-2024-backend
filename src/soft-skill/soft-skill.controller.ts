import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SoftSkillService } from './soft-skill.service.js';
import { CreateSoftSkillDto } from './dto/create-soft-skill.dto.js';
import { UpdateSoftSkillDto } from './dto/update-soft-skill.dto.js';

@Controller('soft-skill')
export class SoftSkillController {
  constructor(private readonly softSkillService: SoftSkillService) {}

  @Post()
  create(@Body() createSoftSkillDto: CreateSoftSkillDto) {
    return this.softSkillService.create(createSoftSkillDto);
  }

  @Get()
  findAll() {
    return this.softSkillService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSoftSkillDto: UpdateSoftSkillDto,
  ) {
    return this.softSkillService.update(id, updateSoftSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.softSkillService.remove(id);
  }
}
