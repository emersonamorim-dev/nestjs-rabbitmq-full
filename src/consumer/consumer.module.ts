import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { Transport, ClientsModule } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONSUMER_EMAIL',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:admin@rabbitmq:5672'],
          queue: 'consumer-email',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ConsumerController],
  providers: [],
})


export class ConsumerModule { }
