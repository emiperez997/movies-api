import { Injectable, Logger } from "@nestjs/common";
import { MovieSeederService } from "./movie/movie.service";
import { ApiKeySeederService } from "./api-key/api-key.service";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly movieSeederService: MovieSeederService,
    private readonly apiKeySeederService: ApiKeySeederService,
  ) {}

  async seed() {
    // Clean database
    await this.movieSeederService.clean();
    await this.apiKeySeederService.clean();

    // Seed database
    await Promise.all([this.movies(), this.apiKeys()])
      .then(([moviesCreated, apiKeysCreated]) => {
        this.logger.debug(`No. of movies created: ${moviesCreated}`);
        this.logger.debug(`No. of api keys created: ${apiKeysCreated}`);
      })
      .catch((error) => {
        this.logger.error(`Seeding failed: ${error}`);
      });
  }

  async movies() {
    return await Promise.all(this.movieSeederService.create())
      .then((createdMovies) => {
        this.logger.debug(`No. of movies created: ${createdMovies.length}`);

        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }

  async apiKeys() {
    return await Promise.all(this.apiKeySeederService.create())
      .then((createdApiKeys) => {
        this.logger.debug(`No. of api keys created: ${createdApiKeys.length}`);

        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
