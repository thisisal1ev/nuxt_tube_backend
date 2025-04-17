import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VideosService {
  constructor(private readonly prisma: PrismaService) {}

  getAll() {
    return this.prisma.video.findMany({
      include: {
        channel: {
          select: {
            name: true,
            isOfficial: true,
            avatar: true,
          },
        },
      },
    });
  }
}
