import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Provider } from "../../providers/entities/provider.entity";
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
  @ManyToOne(()=>Provider,(provider)=>provider.products,{
  })
  @JoinColumn({
    name: 'providerId',
  })
  provider: Provider
}
