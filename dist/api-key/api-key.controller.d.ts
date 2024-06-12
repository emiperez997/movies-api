import { ApiKeyService } from "./api-key.service";
import { ApiKey } from "./schema/api-key.schema";
export declare class ApiKeyController {
    private readonly apiKeyService;
    constructor(apiKeyService: ApiKeyService);
    create({ email }: {
        email: string;
    }): Promise<ApiKey>;
    verify(key: string): Promise<ApiKey>;
    getAll(): Promise<ApiKey[]>;
    delete({ key }: {
        key: string;
    }): Promise<ApiKey>;
}
