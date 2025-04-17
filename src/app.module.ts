import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [VideosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
