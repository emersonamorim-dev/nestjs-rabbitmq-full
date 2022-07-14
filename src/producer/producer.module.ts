import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { RabbitMQModule } from './rabbit-mq.module';


@Module({
  imports: [RabbitMQModule],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}
