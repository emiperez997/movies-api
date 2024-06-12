import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { ApiKeyService } from "./api-key.service";
import { ApiKey } from "./schema/api-key.schema";
import { ApiKeyGuardAll } from "./guards/api-key-all.guard";

@Controller("/api-keys")
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Post()
  async create(@Body() { email }: { email: string }): Promise<ApiKey> {
    try {
      return await this.apiKeyService.create({ email });
    } catch (error) {
      throw new BadRequestException("Error creating API key", error.message);
    }
  }

  @Get("/verify")
  async verify(@Query("apikey") key: string): Promise<ApiKey> {
    try {
      return await this.apiKeyService.verify({ key });
    } catch (error) {
      throw new BadRequestException(
        "Error verificando la API key",
        error.message,
      );
    }
  }

  @Get()
  @UseGuards(ApiKeyGuardAll)
  async getAll(): Promise<ApiKey[]> {
    try {
      return await this.apiKeyService.getAll();
    } catch (error) {
      throw new BadRequestException(
        "Error obteniendo las API keys",
        error.message,
      );
    }
  }

  @Delete()
  @UseGuards(ApiKeyGuardAll)
  async delete(@Body() { key }: { key: string }): Promise<ApiKey> {
    try {
      if (!key) throw new Error("Se necesita una API key");

      return await this.apiKeyService.delete({ key });
    } catch (error) {
      throw new BadRequestException("Error deleting API key", error.message);
    }
  }
}
