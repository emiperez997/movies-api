import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MovieDocument = HydratedDocument<Movie>;

@Schema({
  timestamps: true,
})
export class Movie {
  @Prop({ type: String, required: true, unique: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: [String], required: true })
  genres: string[];

  @Prop({ type: [String], required: true })
  actors: string[];

  @Prop({ type: String, required: true })
  director: string;

  @Prop({ type: Number, required: true })
  year: number;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  image: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
