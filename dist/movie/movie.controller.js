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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const api_key_read_guard_1 = require("../api-key/guards/api-key-read.guard");
const platform_express_1 = require("@nestjs/platform-express");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getMovies(limit, offset) {
        return this.movieService.getAll(limit, offset);
    }
    async getMovieByTitle(title) {
        return this.movieService.getMovieByTitle({ title });
    }
    async getMovie({ id }) {
        return this.movieService.getMovie({ id });
    }
    async createMovie(image, movie) {
        try {
            return await this.movieService.create(image, movie);
        }
        catch (error) {
            throw new common_1.BadRequestException("Error creating movie", error.message);
        }
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(api_key_read_guard_1.ApiKeyGuardRead),
    __param(0, (0, common_1.Query)("limit")),
    __param(1, (0, common_1.Query)("offset")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovies", null);
__decorate([
    (0, common_1.Get)("/search"),
    (0, common_1.UseGuards)(api_key_read_guard_1.ApiKeyGuardRead),
    __param(0, (0, common_1.Query)("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieByTitle", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, common_1.UseGuards)(api_key_read_guard_1.ApiKeyGuardRead),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovie", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "createMovie", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)("/movies"),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map