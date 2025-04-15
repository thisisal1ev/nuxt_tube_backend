import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getHello() {
    return this.appService.getUsers();
  }

  @Get('channels')
  getChannel() {
    return this.appService.getChannels();
  }
}
