import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  sendEmail(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getMessage()}`, data);
  }
}