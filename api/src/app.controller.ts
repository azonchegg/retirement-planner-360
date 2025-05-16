import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cat')
export class CatController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id: string): string {
    return this.appService.getHello();
  }

  @Post()
  postMessage(): string {
    return this.appService.postMessage()
  }
}
