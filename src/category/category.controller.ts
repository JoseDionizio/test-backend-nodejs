import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-categoria.dto';
import { UpdateCategoryDto } from './dto/update-categoria.dto';
import { Category } from './interface/category.interface';

@Controller('api/category')
@ApiTags('Category')
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}

    @Post()
    @ApiOperation({ summary: 'Create new Category' })
    @ApiResponse({ status: 200, description: 'Success.' })    
    async create(@Body() categoryDto : CreateCategoryDto):Promise<Category>{
        return await this.categoryService.create(categoryDto)
    }
    @Put('/:_id')
    async update(@Param('_id') _id:string, @Body() categoryDto:UpdateCategoryDto) : Promise<Category>{
        return await this.categoryService.update(categoryDto,_id);
    }

    @Get('/:_id') 
    async findId(@Param('_id') _id:string) : Promise<Category>{
        return await this.categoryService.findId(_id)
    }

    @Get('/list/:pag/:quant')
    async findAll(@Param() params){
        
    }

    @Delete('/:_id')
    async delete(@Param('_id') _id:string){
        return await this.categoryService.delete(_id)
    }


}
