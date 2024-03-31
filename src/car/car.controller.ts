import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarsService } from './car.service';
import { Car } from './car.schema';
import { CreateCarDto } from './dto/car.createDto';
import { UpdateCarDto } from './dto/car.updateDto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }
    
    @Get()
    async findAll(): Promise<Car[]> {
        return await this.carsService.findAll();
    }

    @Get(':id')
    async findById(@Param() params: any): Promise<Car> {
        return await this.carsService.findById(params.id)
    }

    @Post()
    async create(@Body() dto: CreateCarDto): Promise<Car> {
        return await this.carsService.create(dto)
    }

    @Put()
    async update(@Body() dto: UpdateCarDto): Promise<Car> {
        return await this.carsService.update(dto)
    }

    @Delete(':id')
    async deleteByid(@Param() params: any): Promise<Car> {
        return await this.carsService.deleteById(params.id)
    }
}