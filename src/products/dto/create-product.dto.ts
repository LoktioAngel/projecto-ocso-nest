import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from "class-validator";
<<<<<<< HEAD
import { Product } from "../entities/product.entity";
import { Provider } from "../../providers/entities/provider.entity";
export class CreateProductDto extends Product {
=======
export class CreateProductDto {
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
  @IsString()
  @IsUUID("4")
  @IsOptional()
  productId: string;
  @IsString()
  @MaxLength(40)
  productName: string;
  @IsNumber()
  price: number;
  @IsInt()
  countSeal: number;
<<<<<<< HEAD
  @IsString()
  @IsUUID()
  @IsOptional()
  provider: Provider;
=======
  @IsUUID()
  provider: string;
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
}
