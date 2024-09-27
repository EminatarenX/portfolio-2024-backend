import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto.js';
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class ResumeService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createResumeDto: CreateResumeDto) {
    return this.resume.create({
      data: createResumeDto,
    });
  }

  findOne() {
    return this.resume.findFirst();
  }

  remove(id: string) {
    return this.resume.delete({ where: { id } });
  }
}
