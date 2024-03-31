import { Module } from "@nestjs/common";
import { CarsController } from "./car.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from "./car.schema";
import { CarsService } from "./car.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
    controllers: [CarsController],
    providers: [CarsService]
})

export class CarsModule {
    constructor(private carsService: CarsService) {}
}