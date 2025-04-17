import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { VideosModule } from './videos/videos.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [VideosModule, ChannelsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
