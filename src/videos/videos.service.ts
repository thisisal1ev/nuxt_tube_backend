import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VideosService {
  constructor(private readonly prisma: PrismaService) {}

  getAll() {
    const video = this.prisma.video.findMany({
      include: {
        channel: {
          select: {
            name: true,
            avatar: true,
            isOfficial: true,
          },
        },
      },
    });

    if (!video) {
      throw new Error('Video not found');
    }

    return video;
  }

  getById(id: number) {
    const video = this.prisma.video.findUnique({
      where: {
        id,
      },
      include: {
        channel: {
          select: {
            name: true,
            alias: true,
            avatar: true,
            isOfficial: true,
            subscribers: true,
          },
        },
      },
    });

    if (!video) {
      throw new Error('Video not found');
    }

    return video;
  }
}
