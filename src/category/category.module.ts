import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategorySchema } from './interface/category.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Category',schema:CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports:[CategoryService]
})
export class CategoryModule {}