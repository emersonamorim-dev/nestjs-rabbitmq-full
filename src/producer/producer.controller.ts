import { Controller, Get } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { RabbitMQService } from './rabbit-mq.service';

@Controller()
export class ProducerController {
 
  constructor(
    private readonly producerService: ProducerService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get('producer')
  async getHello() {
    const pendingOperations = Array.from(new Array(5)).map((_, index) =>
      this.rabbitMQService.send('rabbit-mq-producer', {
        message: this.producerService.getHello() + index,
      }),
    );
    Promise.all(pendingOperations);
    return 'Mensagem enviada para a queue!';
  }
}

