import { ClientProxy } from '@nestjs/microservices';
export declare class ConsumerController {
    private readonly client;
    constructor(client: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    getHello(): {
        ok: boolean;
        msg: string;
    };
    get(): {
        ok: boolean;
        msg: string;
    };
}
