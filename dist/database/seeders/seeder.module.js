"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const provider_module_1 = require("../../providers/database/mongodb/provider.module");
const movie_module_1 = require("./movie/movie.module");
const seeder_1 = require("./seeder");
const api_key_module_1 = require("./api-key/api-key.module");
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [provider_module_1.MongoDBProviderModule, movie_module_1.MovieSeederModule, api_key_module_1.ApiKeySeederModule],
        providers: [common_1.Logger, seeder_1.Seeder],
    })
], SeederModule);
//# sourceMappingURL=seeder.module.js.map