import { NotFoundException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Connection} from 'mongoose';
import { AppModule } from '../app.module';
import { CategoryService } from '../category/category.service';
import { Product } from './interface/product.interface';
import { ProductSchema } from './interface/product.schema';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let pruductService: ProductService; 
  
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[AppModule],
      providers: [ProductService, CategoryService,
        {provide:Connection, useValue:{}},
        {provide: getModelToken('Product'), useValue:{}},
        {provide: getModelToken('Category'), useValue:{}}
      ],
    }).compile();

    pruductService = module.get<ProductService>(ProductService);   
  });

  it('should be defined', () => {
    expect(pruductService).toBeDefined();
  });

  describe('findId',()=>{
    it('Get by Id',async ()=>{
      const _id = '6286dc4329e9fb012500520b'
      const product = await pruductService.findId(_id);
      expect(product.description).toBe('desc teste')
    });

    it('NotFoundException', async ()=>{
      const _id = '6286dc4329e9fb01250052';     
      try{
        const product = await pruductService.findId(_id);
      }catch(err){
        expect(err).toBeInstanceOf(NotFoundException)
      }
     
    })
  })

});
