"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerController = void 0;
const common_1 = require("@nestjs/common");
const producer_service_1 = require("./producer.service");
const rabbit_mq_service_1 = require("./rabbit-mq.service");
let ProducerController = class ProducerController {
    constructor(producerService, rabbitMQService) {
        this.producerService = producerService;
        this.rabbitMQService = rabbitMQService;
    }
    async getHello() {
        const pendingOperations = Array.from(new Array(5)).map((_, index) => this.rabbitMQService.send('rabbit-mq-producer', {
            message: this.producerService.getHello() + index,
        }));
        Promise.all(pendingOperations);
        return 'Mensagem enviada para a queue!';
    }
};
__decorate([
    (0, common_1.Get)('producer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProducerController.prototype, "getHello", null);
ProducerController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [producer_service_1.ProducerService,
        rabbit_mq_service_1.RabbitMQService])
], ProducerController);
exports.ProducerController = ProducerController;
//# sourceMappingURL=producer.controller.js.map