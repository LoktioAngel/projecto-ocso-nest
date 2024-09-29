<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Provider } from "../../providers/entities/provider.entity";
=======
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
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
<<<<<<< HEAD
  @ManyToOne(()=>Provider,(provider)=>provider.products,{
  })
  provider: Provider
=======
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
}
