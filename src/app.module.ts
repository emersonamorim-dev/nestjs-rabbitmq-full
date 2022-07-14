import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerController } from './producer/producer.controller';
import { ProducerModule } from './producer/producer.module';
import { ConsumerModule } from './consumer/consumer.module';
import { RabbitMQModule } from './producer/rabbit-mq.module';
import { ProducerService } from './producer/producer.service';

@Module({
  imports: [ProducerModule, ConsumerModule, RabbitMQModule],
  controllers: [ProducerController, AppController],
  providers: [ProducerService, AppService],
})
export class AppModule {}
