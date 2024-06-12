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
exports.ApiKeyGuardAll = void 0;
const common_1 = require("@nestjs/common");
const api_key_service_1 = require("../api-key.service");
const api_key_schema_1 = require("../schema/api-key.schema");
let ApiKeyGuardAll = class ApiKeyGuardAll {
    constructor(apiKeyService) {
        this.apiKeyService = apiKeyService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.query["apikey"];
        if (!apiKey) {
            throw new common_1.UnauthorizedException("Se necesita una API key");
        }
        const apiKeyData = await this.apiKeyService.validate({ key: apiKey });
        if (!apiKeyData) {
            throw new common_1.UnauthorizedException("La API key no es válida");
        }
        if (apiKeyData.type !== api_key_schema_1.ApiKeyType.ALL) {
            throw new common_1.UnauthorizedException("No tiene permisos para realizar esta acción");
        }
        return true;
    }
};
exports.ApiKeyGuardAll = ApiKeyGuardAll;
exports.ApiKeyGuardAll = ApiKeyGuardAll = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_key_service_1.ApiKeyService])
], ApiKeyGuardAll);
//# sourceMappingURL=api-key-all.guard.js.map