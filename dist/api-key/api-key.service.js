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
exports.ApiKeyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const api_key_schema_1 = require("./schema/api-key.schema");
const mongoose_2 = require("mongoose");
const crypto_1 = require("crypto");
const mail_service_1 = require("../mail/mail.service");
let ApiKeyService = class ApiKeyService {
    constructor(apiKeyModel, mailService) {
        this.apiKeyModel = apiKeyModel;
        this.mailService = mailService;
    }
    getAll() {
        return this.apiKeyModel.find().lean();
    }
    async verify({ key }) {
        const apiKey = await this.apiKeyModel.findOne({ key });
        if (!apiKey) {
            throw new Error("La API key no es válida");
        }
        return apiKey;
    }
    validate({ key }) {
        return this.apiKeyModel.findOne({ key }).lean();
    }
    async create({ email }) {
        const key = (0, crypto_1.randomBytes)(3).toString("hex");
        try {
            const apiKey = await this.apiKeyModel.create({
                email,
                key,
                type: api_key_schema_1.ApiKeyType.READ,
            });
            await this.mailService.send({
                to: email,
                subject: "Tu nueva API key",
                message: key,
            });
            return apiKey;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async delete({ key }) {
        try {
            return await this.apiKeyModel.findOneAndDelete({ key });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.ApiKeyService = ApiKeyService;
exports.ApiKeyService = ApiKeyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(api_key_schema_1.ApiKey.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mail_service_1.MailService])
], ApiKeyService);
//# sourceMappingURL=api-key.service.js.map