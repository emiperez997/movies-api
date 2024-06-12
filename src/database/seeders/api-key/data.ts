import { IApiKey } from "src/api-key/interfaces/api-key.interface";
import { ApiKeyType } from "src/api-key/schema/api-key.schema";

export const apiKeys: IApiKey[] = [
  {
    email: "emi.perez997@gmail.com",
    key: "123",
    type: ApiKeyType.WRITE,
  },
];
