import { ApiKeyType } from "../schema/api-key.schema";
export interface IApiKey {
    email: string;
    key: string;
    type: ApiKeyType;
}
