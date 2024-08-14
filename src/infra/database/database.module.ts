import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaAnswerAttachmentsRepository } from "./prisma/repositories/prisma-answer-attachments-repository";
import { PrismaAnswersCommentsRepository } from "./prisma/repositories/prisma-answer-comments-repository";
import { PrismaAnswerRepository } from "./prisma/repositories/prisma-answer-repository";
import { PrismaQuestionAttachmentsRepository } from "./prisma/repositories/prisma-question-attachments-repository";
import { PrismaQuestionCommentsRepository } from "./prisma/repositories/prisma-question-comments-repository";
import { PrismaQuestionRepository } from "./prisma/repositories/prisma-questions-repository";
import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { PrismaStudentRepository } from "./prisma/repositories/prisma-students-repository";
import { StudentsRepository } from "@/domain/forum/application/repositories/students-repository";

@Module({
  providers: [
    PrismaService,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswersCommentsRepository,
    PrismaAnswerRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    { provide: QuestionsRepository, useClass: PrismaQuestionRepository },
    { provide: StudentsRepository, useClass: PrismaStudentRepository },
  ],
  exports: [
    PrismaService,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswersCommentsRepository,
    PrismaAnswerRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    QuestionsRepository,
    StudentsRepository,
  ],
})
export class DatabaseModule {}
