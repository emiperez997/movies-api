import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./schema/movie.schema";
import { ApiKeyGuardRead } from "src/api-key/guards/api-key-read.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateMovieDto } from "./dto/create-movie";

@Controller("/movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @UseGuards(ApiKeyGuardRead)
  async getMovies(
    @Query("limit") limit: number,
    @Query("offset") offset: number,
  ): Promise<Movie[]> {
    return this.movieService.getAll(limit, offset);
  }

  @Get("/search")
  @UseGuards(ApiKeyGuardRead)
  async getMovieByTitle(@Query("title") title: string): Promise<Movie> {
    return this.movieService.getMovieByTitle({ title });
  }

  @Get("/:id")
  @UseGuards(ApiKeyGuardRead)
  async getMovie({ id }: { id: string }): Promise<Movie> {
    return this.movieService.getMovie({ id });
  }

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  async createMovie(
    @UploadedFile() image: Express.Multer.File,
    @Body() movie: CreateMovieDto,
  ): Promise<Movie> {
    try {
      return await this.movieService.create(image, movie);
    } catch (error) {
      throw new BadRequestException("Error creating movie", error.message);
    }
  }
}
