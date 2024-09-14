import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {v4 as uuid }from 'uuid';

@Injectable()
export class ProductsService {
  private products:CreateProductDto[] = [
      {
          productId: uuid(),
          productName: 'Sabritas Normal 48g',
          price: 29,
          countSeal: 3,
          provider: uuid(),
      },
      {
          productId: uuid(),
          productName: 'Coca Cola 600ml',
          price: 40,
          countSeal: 2,
          provider: uuid(),
      },
      {
          productId: uuid(),
          productName: 'Agua Ciel 1L',
          price: 15,
          countSeal: 2,
          provider: uuid(),
      }
  ]
  create(createProductDto: CreateProductDto) {
    createProductDto.productId=uuid()
    this.products.push(createProductDto)
    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const productFound = this.products.filter((products)=>products.productId== id)[0];
    if(!productFound) throw new NotFoundException();
    return productFound;
  }
  findByProvider(id: string){
    const prov = this.products.filter((provider)=>provider.provider== id);
    if(prov.length == 0) throw new NotFoundException();
    return prov;
  }
  update(id: string, updateProductDto: UpdateProductDto) {
    let  updateProduct =this.findOne(id);
    updateProduct ={
      ...updateProduct, //pasamos datos actuales delempleado
      ...updateProductDto //pasanos datos nuevos
    }
    this.products =this.products.map ((product)=>{
      if(product.productId == id){
        product=updateProduct
      }
      return product
    })
    return updateProduct;
  }

  remove(id: string) {
    this.findOne(id)
    this.products = this.products.filter((products) =>products.productId !=id );
    return this.products;
  }
}
