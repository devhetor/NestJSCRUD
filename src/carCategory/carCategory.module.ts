import { Module } from "@nestjs/common";
import { CarCategoriesController } from "./carCategory.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { CarCategory, CarCategorySchema } from "./carCategory.schema";
import { CarCategoriesService } from "./carCategory.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: CarCategory.name, schema: CarCategorySchema }])],
    controllers: [CarCategoriesController],
    providers: [CarCategoriesService]
})

export class CarCategoriesModule {
    constructor(private carCategoriesService: CarCategoriesService) {}
}