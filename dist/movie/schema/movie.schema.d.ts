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
import { HydratedDocument } from "mongoose";
export type MovieDocument = HydratedDocument<Movie>;
export declare class Movie {
    title: string;
    description: string;
    genres: string[];
    actors: string[];
    director: string;
    year: number;
    rating: number;
    image: string;
}
export declare const MovieSchema: import("mongoose").Schema<Movie, import("mongoose").Model<Movie, any, any, any, import("mongoose").Document<unknown, any, Movie> & Movie & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Movie, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Movie>> & import("mongoose").FlatRecord<Movie> & {
    _id: import("mongoose").Types.ObjectId;
}>;
