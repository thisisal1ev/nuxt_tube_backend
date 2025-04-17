import { Controller, Get, Param } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller('v1/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  getAll() {
    return this.channelsService.getChannels();
  }

  @Get(':alias')
  getByAlias(@Param('alias') alias: string) {
    return this.channelsService.getByAlias(alias);
  }
}
