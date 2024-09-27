import { Module } from '@nestjs/common';
import { LanguageService } from './language.service.js';
import { LanguageController } from './language.controller.js';

@Module({
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
