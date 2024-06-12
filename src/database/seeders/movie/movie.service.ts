import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Movie } from "src/movie/schema/movie.schema";
import { movies } from "./data";
import { IMovie } from "src/movie/interface/movie";

@Injectable()
export class MovieSeederService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
  ) {}

  create(): Array<Promise<Movie>> {
    try {
      return movies.map(async (movie: IMovie) => {
        return await this.movieModel.create(movie);
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async clean(): Promise<any> {
    return await this.movieModel.deleteMany({});
  }
}
