"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const producer_controller_1 = require("./producer/producer.controller");
const producer_module_1 = require("./producer/producer.module");
const consumer_module_1 = require("./consumer/consumer.module");
const rabbit_mq_module_1 = require("./producer/rabbit-mq.module");
const producer_service_1 = require("./producer/producer.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [producer_module_1.ProducerModule, consumer_module_1.ConsumerModule, rabbit_mq_module_1.RabbitMQModule],
        controllers: [producer_controller_1.ProducerController, app_controller_1.AppController],
        providers: [producer_service_1.ProducerService, app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map