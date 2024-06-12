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
exports.Seeder = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie/movie.service");
const api_key_service_1 = require("./api-key/api-key.service");
let Seeder = class Seeder {
    constructor(logger, movieSeederService, apiKeySeederService) {
        this.logger = logger;
        this.movieSeederService = movieSeederService;
        this.apiKeySeederService = apiKeySeederService;
    }
    async seed() {
        await this.movieSeederService.clean();
        await this.apiKeySeederService.clean();
        await Promise.all([this.movies(), this.apiKeys()])
            .then(([moviesCreated, apiKeysCreated]) => {
            this.logger.debug(`No. of movies created: ${moviesCreated}`);
            this.logger.debug(`No. of api keys created: ${apiKeysCreated}`);
        })
            .catch((error) => {
            this.logger.error(`Seeding failed: ${error}`);
        });
    }
    async movies() {
        return await Promise.all(this.movieSeederService.create())
            .then((createdMovies) => {
            this.logger.debug(`No. of movies created: ${createdMovies.length}`);
            return Promise.resolve(true);
        })
            .catch((error) => Promise.reject(error));
    }
    async apiKeys() {
        return await Promise.all(this.apiKeySeederService.create())
            .then((createdApiKeys) => {
            this.logger.debug(`No. of api keys created: ${createdApiKeys.length}`);
            return Promise.resolve(true);
        })
            .catch((error) => Promise.reject(error));
    }
};
exports.Seeder = Seeder;
exports.Seeder = Seeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [common_1.Logger,
        movie_service_1.MovieSeederService,
        api_key_service_1.ApiKeySeederService])
], Seeder);
//# sourceMappingURL=seeder.js.map