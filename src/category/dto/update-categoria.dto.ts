import { CreateCategoryDto } from "./create-categoria.dto";
import { PartialType } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){}