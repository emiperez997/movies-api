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
exports.ApiKeyController = void 0;
const common_1 = require("@nestjs/common");
const api_key_service_1 = require("./api-key.service");
const api_key_all_guard_1 = require("./guards/api-key-all.guard");
let ApiKeyController = class ApiKeyController {
    constructor(apiKeyService) {
        this.apiKeyService = apiKeyService;
    }
    async create({ email }) {
        try {
            return await this.apiKeyService.create({ email });
        }
        catch (error) {
            throw new common_1.BadRequestException("Error creating API key", error.message);
        }
    }
    async verify(key) {
        try {
            return await this.apiKeyService.verify({ key });
        }
        catch (error) {
            throw new common_1.BadRequestException("Error verificando la API key", error.message);
        }
    }
    async getAll() {
        try {
            return await this.apiKeyService.getAll();
        }
        catch (error) {
            throw new common_1.BadRequestException("Error obteniendo las API keys", error.message);
        }
    }
    async delete({ key }) {
        try {
            if (!key)
                throw new Error("Se necesita una API key");
            return await this.apiKeyService.delete({ key });
        }
        catch (error) {
            throw new common_1.BadRequestException("Error deleting API key", error.message);
        }
    }
};
exports.ApiKeyController = ApiKeyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/verify"),
    __param(0, (0, common_1.Query)("apikey")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "verify", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(api_key_all_guard_1.ApiKeyGuardAll),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "getAll", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(api_key_all_guard_1.ApiKeyGuardAll),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "delete", null);
exports.ApiKeyController = ApiKeyController = __decorate([
    (0, common_1.Controller)("/api-keys"),
    __metadata("design:paramtypes", [api_key_service_1.ApiKeyService])
], ApiKeyController);
//# sourceMappingURL=api-key.controller.js.map