/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ApiKey } from "./schema/api-key.schema";
import { Model } from "mongoose";
import { MailService } from "src/mail/mail.service";
export declare class ApiKeyService {
    private readonly apiKeyModel;
    private readonly mailService;
    constructor(apiKeyModel: Model<ApiKey>, mailService: MailService);
    getAll(): Promise<ApiKey[]>;
    verify({ key }: {
        key: string;
    }): Promise<ApiKey>;
    validate({ key }: {
        key: string;
    }): Promise<ApiKey>;
    create({ email }: {
        email: string;
    }): Promise<ApiKey>;
    delete({ key }: {
        key: string;
    }): Promise<ApiKey>;
}
