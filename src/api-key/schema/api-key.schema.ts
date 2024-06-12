import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type ApiKeyDocument = HydratedDocument<ApiKey>;
@Schema({ timestamps: true })
export class ApiKey {
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true, unique: true })
  key: string;

  @Prop({ type: String, required: true })
  type: ApiKeyType;
}

export const ApiKeySchema = SchemaFactory.createForClass(ApiKey);

export enum ApiKeyType {
  READ = "read",
  WRITE = "write",
  ALL = "all",
}
