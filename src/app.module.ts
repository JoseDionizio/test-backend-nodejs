import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://seubd:<SENHA>@<CAMINHO>',
    { useNewUrlParser: true, useUnifiedTopology: true }),
    ProductModule,
    CategoryModule
  ],

 
})
export class AppModule {}
