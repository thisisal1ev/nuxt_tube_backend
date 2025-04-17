import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('v1/videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  getAll() {
    return this.videosService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.videosService.getById(id);
  }
}
