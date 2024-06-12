/// <reference types="multer" />
import { MovieService } from "./movie.service";
import { Movie } from "./schema/movie.schema";
import { CreateMovieDto } from "./dto/create-movie";
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getMovies(limit: number, offset: number): Promise<Movie[]>;
    getMovieByTitle(title: string): Promise<Movie>;
    getMovie({ id }: {
        id: string;
    }): Promise<Movie>;
    createMovie(image: Express.Multer.File, movie: CreateMovieDto): Promise<Movie>;
}
