"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerModule = void 0;
const common_1 = require("@nestjs/common");
const consumer_controller_1 = require("./consumer.controller");
const microservices_1 = require("@nestjs/microservices");
let ConsumerModule = class ConsumerModule {
};
ConsumerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'CONSUMER_EMAIL',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://vr:vr@rabbitmq:5672'],
                        queue: 'consumer-email',
                        queueOptions: {
                            durable: false,
                        },
                    },
                },
            ]),
        ],
        controllers: [consumer_controller_1.ConsumerController],
        providers: [],
    })
], ConsumerModule);
exports.ConsumerModule = ConsumerModule;
//# sourceMappingURL=consumer.module.js.map