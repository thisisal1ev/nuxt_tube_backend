import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChannelsService {
  constructor(private readonly prisma: PrismaService) {}

  getChannels() {
    return this.prisma.channel.findMany();
  }

  getByAlias(alias: string) {
    const channel = this.prisma.channel.findUnique({
      where: {
        alias,
      },
    });

    if (!channel) {
      throw new Error('Channel not found');
    }

    return channel;
  }
}
