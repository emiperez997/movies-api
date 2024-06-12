import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ApiKey, ApiKeySchema } from "src/api-key/schema/api-key.schema";
import { ApiKeySeederService } from "./api-key.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ApiKey.name, schema: ApiKeySchema }]),
  ],
  providers: [ApiKeySeederService],
  exports: [ApiKeySeederService],
})
export class ApiKeySeederModule {}
