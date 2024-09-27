import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto.js';
import { IsBoolean } from 'class-validator';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsBoolean()
  active: boolean;
}
