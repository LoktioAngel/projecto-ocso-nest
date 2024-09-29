import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { v4 as uuid } from "uuid";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
<<<<<<< HEAD
import { loadEnvFile } from "process";
=======
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}
<<<<<<< HEAD
=======
  private products: CreateProductDto[] = [
    {
      productId: uuid(),
      productName: "Sabritas Normal 48g",
      price: 29,
      countSeal: 3,
      provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Coca Cola 600 ml",
      price: 40,
      countSeal: 2,
      provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Agua Ciel 1L",
      price: 15,
      countSeal: 2,
      provider: uuid(),
    },
  ];
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232

  async create(CreateProductDto: CreateProductDto) {
    const product = this.productRepository.save(CreateProductDto);
    return product;
  }

  findAll() {
<<<<<<< HEAD
    return this.productRepository.find({
      loadEagerRelations: true,
      relations: {
        provider:true
      }
    });
    
=======
    return this.productRepository.find();
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
  }

  findOne(id: string) {
    const product = this.productRepository.findOneBy({
      productId: id,
    });
    if (!product) throw new NotFoundException();
    return product;
  }

  findByProvider(id: string) {
<<<<<<< HEAD
    return "ok"
=======
    const productsFound = this.products.filter(
      (product) => product.provider === id
    );
    if (productsFound.length === 0) throw new NotFoundException();
    return productsFound;
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.productRepository.preload({
      productId: id,
      ...updateProductDto,
    });
    if (!productToUpdate) throw new NotFoundException();
    this.productRepository.save(productToUpdate);
    return productToUpdate;
  }

  async remove(id: string) {
    this.findOne(id);
    this.productRepository.delete({
      productId: id,
    });
    return {
      message: `Objeto con id ${id} eliminado`,
    };
  }
}
