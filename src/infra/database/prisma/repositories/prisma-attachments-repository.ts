import { Attachment } from '@/domain/forum/enterprise/entities/attachment'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaAttachmentMapper } from '../mappers/prisma-attachment-mapper'
import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachments-repository'

@Injectable()
export class PrismaAttachmentsRepository implements AttachmentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(student: Attachment): Promise<void> {
    const data = PrismaAttachmentMapper.toPrisma(student)

    await this.prisma.attachment.create({
      data,
    })
  }
}
