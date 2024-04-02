import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarCategoriesService } from './carCategory.service';
import { CarCategory } from './carCategory.schema';
import { CreateCarCategoryDto } from './dto/carCategory.createDto';
import { UpdateCarCategoryDto } from './dto/carCategory.updateDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Car categories')
@Controller('carCategories')
export class CarCategoriesController {
    constructor(private readonly carCategoriesService: CarCategoriesService) { }
    
    @Get()
    async findAll(): Promise<CarCategory[]> {
        return await this.carCategoriesService.findAll();
    }

    @Get(':id')
    async findById(@Param() params: any): Promise<CarCategory> {
        return await this.carCategoriesService.findById(params.id)
    }

    @Post()
    async create(@Body() dto: CreateCarCategoryDto): Promise<CarCategory> {
        return await this.carCategoriesService.create(dto)
    }

    @Put()
    async update(@Body() dto: UpdateCarCategoryDto): Promise<CarCategory> {
        return await this.carCategoriesService.update(dto)
    }

    @Delete(':id')
    async deleteByid(@Param() params: any): Promise<CarCategory> {
        return await this.carCategoriesService.deleteById(params.id)
    }
}