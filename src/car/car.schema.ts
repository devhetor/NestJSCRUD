import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop()
  name: string;

  @Prop()
  releaseYear: Date;

  @Prop()
  available: boolean;

  @Prop()
  gasAvailable: boolean;

}

export const CarSchema = SchemaFactory.createForClass(Car);