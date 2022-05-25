import { ApiProperty } from '@nestjs/swagger';
import { IsString,IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {

  @ApiProperty({description:'Name for category'})
  @IsString()
  @IsNotEmpty()
  readonly name: string;  
 
}