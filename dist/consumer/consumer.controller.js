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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const message_event_1 = require("./message.event");
let ConsumerController = class ConsumerController {
    constructor(client) {
        this.client = client;
    }
    async onApplicationBootstrap() {
        await this.client.connect();
    }
    getHello() {
        const msg = 'Consumer agora ' + new Date().toISOString();
        this.client.emit('message_printed', new message_event_1.Message(msg));
        return {
            ok: true,
            msg: 'Mensagem enviada!!',
        };
    }
    get() {
        const msg = 'Consumer agora' + new Date().toISOString();
        this.client.emit('message_printed', new message_event_1.Message(msg));
        return {
            ok: true,
            msg: 'Mensagem enviada!!',
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/consumer"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "get", null);
ConsumerController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('CONSUMER_EMAIL')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ConsumerController);
exports.ConsumerController = ConsumerController;
//# sourceMappingURL=consumer.controller.js.map