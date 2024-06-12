import { Logger, Module } from "@nestjs/common";
import { MongoDBProviderModule } from "src/providers/database/mongodb/provider.module";
import { MovieSeederModule } from "./movie/movie.module";
import { Seeder } from "./seeder";
import { ApiKeySeederModule } from "./api-key/api-key.module";

@Module({
  imports: [MongoDBProviderModule, MovieSeederModule, ApiKeySeederModule],
  providers: [Logger, Seeder],
})
export class SeederModule {}
