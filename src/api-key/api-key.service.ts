import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ApiKey, ApiKeyType } from "./schema/api-key.schema";
import { Model } from "mongoose";
import { randomBytes } from "crypto";
import { MailService } from "src/mail/mail.service";

@Injectable()
export class ApiKeyService {
  constructor(
    @InjectModel(ApiKey.name) private readonly apiKeyModel: Model<ApiKey>,
    private readonly mailService: MailService,
  ) {}

  getAll(): Promise<ApiKey[]> {
    return this.apiKeyModel.find().lean();
  }

  async verify({ key }: { key: string }): Promise<ApiKey> {
    const apiKey = await this.apiKeyModel.findOne({ key });

    if (!apiKey) {
      throw new Error("La API key no es válida");
    }

    return apiKey;
  }

  validate({ key }: { key: string }): Promise<ApiKey> {
    return this.apiKeyModel.findOne({ key }).lean();
  }

  async create({ email }: { email: string }): Promise<ApiKey> {
    const key = randomBytes(3).toString("hex");

    try {
      const apiKey = await this.apiKeyModel.create({
        email,
        key,
        type: ApiKeyType.READ,
      });

      await this.mailService.send({
        to: email,
        subject: "Tu nueva API key",
        message: key,
      });

      return apiKey;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete({ key }: { key: string }): Promise<ApiKey> {
    try {
      return await this.apiKeyModel.findOneAndDelete({ key });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
