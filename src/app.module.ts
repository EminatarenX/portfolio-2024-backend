import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module.js';
import { ResumeModule } from './resume/resume.module.js';
import { ActivityModule } from './activity/activity.module.js';
import { SoftSkillModule } from './soft-skill/soft-skill.module.js';
import { EducationModule } from './education/education.module.js';
import { ExperienceModule } from './experience/experience.module.js';
import { LanguageModule } from './language/language.module.js';
import { SkillModule } from './skill/skill.module.js';
import { ProjectModule } from './project/project.module.js';
import { BlogModule } from './blog/blog.module.js';
import { MessageModule } from './message/message.module.js';

@Module({
  imports: [
    ProfileModule,
    ResumeModule,
    ActivityModule,
    SoftSkillModule,
    EducationModule,
    ExperienceModule,
    LanguageModule,
    SkillModule,
    ProjectModule,
    BlogModule,
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
