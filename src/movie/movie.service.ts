import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "./schema/movie.schema";
import { Model } from "mongoose";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { CreateMovieDto } from "./dto/create-movie";

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
    private cloudinary: CloudinaryService,
  ) {}

  async getAll(limit: number = 10, offset: number = 0): Promise<Movie[]> {
    return this.movieModel.find().limit(limit).skip(offset).lean();
  }

  async getMovie({ id }: { id: string }): Promise<Movie> {
    return this.movieModel.findById(id).lean();
  }

  async getMovieByTitle({ title }: { title: string }): Promise<Movie> {
    return await this.movieModel
      .find({
        title: new RegExp(title, "i"),
      })
      .lean();
  }

  async create(
    image: Express.Multer.File,
    movie: CreateMovieDto,
  ): Promise<Movie> {
    try {
      const movieExists = await this.movieModel.findOne({
        title: movie.title,
      });

      if (movieExists) {
        // Throw error if movie already exists
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
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
