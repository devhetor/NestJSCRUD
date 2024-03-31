import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './car/car.module';
import { CarCategoriesModule } from './carCategory/carCategory.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CarsModule,  CarCategoriesModule],
  providers: [],
  controllers: []
})
export class AppModule {}
