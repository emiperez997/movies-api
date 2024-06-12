export interface CreateMovieDto {
    title: string;
    description: string;
    genres: string[];
    actors: string[];
    director: string;
    year: number;
    rating: number;
}
