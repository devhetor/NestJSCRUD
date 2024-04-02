import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './car/car.module';
import { CarCategoriesModule } from './carCategory/carCategory.module';
import { CustomersModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    CarsModule,
    CarCategoriesModule,
    CustomersModule
  ],
  providers: [],
  controllers: []
})
export class AppModule { }
