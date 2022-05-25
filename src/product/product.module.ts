import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import {MongooseModule} from '@nestjs/mongoose'
import {ProductSchema} from './interface/product.schema'
import { CategoryModule } from '../category/category.module';

@Module({
  imports:[MongooseModule.forFeature([{name:'Product',schema:ProductSchema}]),CategoryModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
