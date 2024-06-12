import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { MovieModule } from "./movie/movie.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { MongoDBProviderModule } from "./providers/database/mongodb/provider.module";
import { ApiKeyModule } from "./api-key/api-key.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongoDBProviderModule,
    MovieModule,
    ApiKeyModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
