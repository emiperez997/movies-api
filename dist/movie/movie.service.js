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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const movie_schema_1 = require("./schema/movie.schema");
const mongoose_2 = require("mongoose");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let MovieService = class MovieService {
    constructor(movieModel, cloudinary) {
        this.movieModel = movieModel;
        this.cloudinary = cloudinary;
    }
    async getAll(limit = 10, offset = 0) {
        return this.movieModel.find().limit(limit).skip(offset).lean();
    }
    async getMovie({ id }) {
        return this.movieModel.findById(id).lean();
    }
    async getMovieByTitle({ title }) {
        return await this.movieModel
            .find({
            title: new RegExp(title, "i"),
        })
            .lean();
    }
    async create(image, movie) {
        try {
            const movieExists = await this.movieModel.findOne({
                title: movie.title,
            });
            if (movieExists) {
                throw new Error("Movie already exists");
            }
            const imageName = movie.title.toLowerCase().split(" ").join("_");
            console.log(image);
            image.originalname = imageName;
            const response = await this.cloudinary.uploadImage(image);
            const newMovie = new this.movieModel({
                ...movie,
                image: response.secure_url,
            });
            await newMovie.save();
            return newMovie;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(movie_schema_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService])
], MovieService);
//# sourceMappingURL=movie.service.js.map