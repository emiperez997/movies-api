"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeySeederModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const api_key_schema_1 = require("../../../api-key/schema/api-key.schema");
const api_key_service_1 = require("./api-key.service");
let ApiKeySeederModule = class ApiKeySeederModule {
};
exports.ApiKeySeederModule = ApiKeySeederModule;
exports.ApiKeySeederModule = ApiKeySeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: api_key_schema_1.ApiKey.name, schema: api_key_schema_1.ApiKeySchema }]),
        ],
        providers: [api_key_service_1.ApiKeySeederService],
        exports: [api_key_service_1.ApiKeySeederService],
    })
], ApiKeySeederModule);
//# sourceMappingURL=api-key.module.js.map