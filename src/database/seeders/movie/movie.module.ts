import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Movie, MovieSchema } from "src/movie/schema/movie.schema";
import { MovieSeederService } from "./movie.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  providers: [MovieSeederService],
  exports: [MovieSeederService],
})
export class MovieSeederModule {}
