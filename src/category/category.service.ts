import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-categoria.dto';
import { UpdateCategoryDto } from './dto/update-categoria.dto';
import { Category } from './interface/category.interface';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private readonly categoryModel: Model<Category>
    ){}


    async create(categoryDto : CreateCategoryDto):Promise<Category>{

        const categoryCreate = new this.categoryModel(categoryDto)

        return await categoryCreate.save();
    }
    async update(categoryDto : UpdateCategoryDto, _id : string) : Promise<Category>{

        const category = await this.findId(_id);

        if (!category) {
            throw new NotFoundException(`Category ${_id} Not found!`)
        }

        return await this.categoryModel.findOneAndUpdate({_id}, {$set:categoryDto}).exec();

    }

    async findId(_id:string):Promise<Category>{
        return await this.categoryModel.findOne({_id}).exec();
    }

    async findAll():Promise<Array<Category>>{
        return await this.categoryModel.find();
    }
    async delete(_id:string):Promise<void>{
        const category = await this.findId(_id);

        if (!category) {
            throw new NotFoundException(`Category ${_id} Not found!`)
        }

        await this.categoryModel.deleteOne({_id});

    }

}
