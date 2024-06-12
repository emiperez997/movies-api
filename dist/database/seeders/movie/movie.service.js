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
exports.MovieSeederService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const movie_schema_1 = require("../../../movie/schema/movie.schema");
const data_1 = require("./data");
let MovieSeederService = class MovieSeederService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    create() {
        try {
            return data_1.movies.map(async (movie) => {
                return await this.movieModel.create(movie);
            });
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async clean() {
        return await this.movieModel.deleteMany({});
    }
};
exports.MovieSeederService = MovieSeederService;
exports.MovieSeederService = MovieSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(movie_schema_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MovieSeederService);
//# sourceMappingURL=movie.service.js.map