import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ApiKey } from "src/api-key/schema/api-key.schema";
import { apiKeys } from "./data";

@Injectable()
export class ApiKeySeederService {
  constructor(
    @InjectModel(ApiKey.name) private readonly apiKeyModel: Model<ApiKey>,
  ) {}

  create(): Array<Promise<ApiKey>> {
    try {
      return apiKeys.map(async (apiKey: ApiKey) => {
        return await this.apiKeyModel.create(apiKey);
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  clean(): Promise<any> {
    return this.apiKeyModel.deleteMany({});
  }
}
