import { Controller, Get, Inject } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';

@Controller()
export class ConsumerController {
  constructor(@Inject('CONSUMER_EMAIL') private readonly client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  getHello() {
    const msg = 'Consumer agora ' + new Date().toISOString();
    this.client.emit('message_printed', new Message(msg));
    
    return {
      ok: true,
      msg: 'Mensagem enviada!!',
    };
  }
  @Get("/consumer")
  get
  () {
    const msg = 'Consumer agora' + new Date().toISOString();
    this.client.emit('message_printed', new Message(msg));
    
    return {
      ok: true,
      msg: 'Mensagem enviada!!',
    };
  }
}