import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  productId: string;
  @Column("text")
  productName: string;
  @Column("float")
  price: number;
  @Column("int")
  countSeal: number;
}
