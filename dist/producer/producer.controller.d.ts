import { ProducerService } from './producer.service';
import { RabbitMQService } from './rabbit-mq.service';
export declare class ProducerController {
    private readonly producerService;
    private readonly rabbitMQService;
    constructor(producerService: ProducerService, rabbitMQService: RabbitMQService);
    getHello(): Promise<string>;
}
