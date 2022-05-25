import { IsDecimal, IsInt, IsString,IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsString()  
  @IsNotEmpty()
  readonly description: string;
  
 @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly category_id: string;
}