import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import configuration from "src/config/configuration";

@Module({
  imports: [MongooseModule.forRoot(configuration().databaseUrl)],
})
export class MongoDBProviderModule {}
