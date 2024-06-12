import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Movie, MovieSchema } from "./schema/movie.schema";
import { MovieController } from "./movie.controller";
import { MovieService } from "./movie.service";
import { ApiKeyModule } from "src/api-key/api-key.module";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
    ApiKeyModule,
    CloudinaryModule,
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
