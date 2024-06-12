import { Module } from "@nestjs/common";
import { ApiKeyService } from "./api-key.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ApiKey, ApiKeySchema } from "./schema/api-key.schema";
import { ApiKeyController } from "./api-key.controller";
import { MailModule } from "src/mail/mail.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ApiKey.name, schema: ApiKeySchema }]),
    MailModule,
  ],
  controllers: [ApiKeyController],
  providers: [ApiKeyService],
  exports: [ApiKeyService],
})
export class ApiKeyModule {}
