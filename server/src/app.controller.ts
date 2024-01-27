import { Body, Post, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async addUser(@Body() body: object) {
    return this.appService.addUser(body);
  }
}
