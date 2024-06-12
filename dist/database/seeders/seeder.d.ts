import { Logger } from "@nestjs/common";
import { MovieSeederService } from "./movie/movie.service";
import { ApiKeySeederService } from "./api-key/api-key.service";
export declare class Seeder {
    private readonly logger;
    private readonly movieSeederService;
    private readonly apiKeySeederService;
    constructor(logger: Logger, movieSeederService: MovieSeederService, apiKeySeederService: ApiKeySeederService);
    seed(): Promise<void>;
    movies(): Promise<boolean>;
    apiKeys(): Promise<boolean>;
}
