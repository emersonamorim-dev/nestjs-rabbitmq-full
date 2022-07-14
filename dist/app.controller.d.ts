import { AppService } from './app.service';
import { RmqContext } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    sendEmail(data: number[], context: RmqContext): void;
}
