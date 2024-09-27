import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-skill.dto.js';
import { IsBoolean } from 'class-validator';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
  @IsBoolean()
  active: boolean;
}
