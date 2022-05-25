import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model,Types } from 'mongoose';
import { CategoryService } from '../category/category.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
        private readonly categoryService : CategoryService
    ){}

    private logger = new Logger(ProductService.name);
    private ObjectId = Types.ObjectId;




    async create(productDto : CreateProductDto):Promise<Product>{

        const productCreate = new this.productModel(productDto);
        const category = await this.categoryService.findId(productDto.category_id)
        productCreate.category = category; 

        return await productCreate.save();
    }

    async update(productDto : UpdateProductDto, _id : string) : Promise<Product>{

        const product = await this.findId(_id);

        if (!product) {
            throw new NotFoundException(`Product ${_id} Not found!`)
        }


        return await this.productModel.findOneAndUpdate({_id}, {$set:productDto}).exec()


    }
    async findId(_id:string):Promise<Product>{

        this.logger.log('init==>', this.ObjectId.isValid(_id));
        if(!this.ObjectId.isValid(_id))
        throw new NotFoundException(`Invalid!`);

        //const _id = new this.ObjectId(id);
        let countproduct = await this.productModel.findById(_id).count();
        this.logger.log('teste===>',countproduct)
        if (countproduct == 0) {
            throw new NotFoundException(`Product ${_id} Not found!`)
        }
        const product = await this.productModel.findById(_id).exec();
        return product;
    }

    async findAll():Promise<Array<Product>>{
        return await this.productModel.find();
    }
    async delete(_id:string):Promise<void>{
        const category = await this.findId(_id);

        if (!category) {
            throw new NotFoundException(`Category ${_id} Not found!`)
        }

        await this.productModel.deleteOne({_id});

    }
}
