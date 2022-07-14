import { Injectable } from '@nestjs/common';

@Injectable()
export class ProducerService {
  getHello(): string {
    return 'Hello World!';
  }
}

