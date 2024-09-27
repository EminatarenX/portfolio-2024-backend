import { Module } from '@nestjs/common';
import { SkillService } from './skill.service.js';
import { SkillController } from './skill.controller.js';

@Module({
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
