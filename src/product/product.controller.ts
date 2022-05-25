import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Product')
@Controller('api/product')
export class ProductController {

    constructor(private readonly productService : ProductService){}

    @Post()
    @ApiOperation({ summary: 'Create new Product' })
    //@ApiResponse({ status: 200, description: 'Success.' })    
    async create(@Body() createProductDto : CreateProductDto):Promise<Product>{
        return await this.productService.create(createProductDto)
    }
    @Put('/:_id')
    async update(@Param('_id') _id:string, @Body() productDto:UpdateProductDto) : Promise<Product>{
        return await this.productService.update(productDto,_id);
    }

    @Get('/:_id') 
    async findId(@Param('_id') _id:string) : Promise<Product>{
        return await this.productService.findId(_id)
    }

    @Get('/list/:pag/:quant')
    async findAll(@Param() params){
        
    }

    @Delete('/:_id')
    async delete(@Param('_id') _id:string){
        return await this.productService.delete(_id)
    }

}
