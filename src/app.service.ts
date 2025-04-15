import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  getChannels(){
    return this.prisma.channel.findMany()
  }
}
