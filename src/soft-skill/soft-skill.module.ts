import { Module } from '@nestjs/common';
import { SoftSkillService } from './soft-skill.service.js';
import { SoftSkillController } from './soft-skill.controller.js';

@Module({
  controllers: [SoftSkillController],
  providers: [SoftSkillService],
})
export class SoftSkillModule {}
