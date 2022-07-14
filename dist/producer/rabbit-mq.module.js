"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rabbit_mq_service_1 = require("./rabbit-mq.service");
let RabbitMQModule = class RabbitMQModule {
};
RabbitMQModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'rabbit-mq-module',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [
                            'amqp://vr:vr@rabbitmq:5672',
                        ],
                        queue: 'producer-email',
                    },
                },
            ]),
        ],
        controllers: [],
        providers: [rabbit_mq_service_1.RabbitMQService],
        exports: [rabbit_mq_service_1.RabbitMQService],
    })
], RabbitMQModule);
exports.RabbitMQModule = RabbitMQModule;
//# sourceMappingURL=rabbit-mq.module.js.map