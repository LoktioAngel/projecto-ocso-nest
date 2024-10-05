import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Provider } from "../../providers/entities/provider.entity";
import { ApiProperty } from "@nestjs/swagger";
@Entity()
export class Product {
  @ApiProperty({
    default: "UUID"
  })
  @PrimaryGeneratedColumn("uuid")
  productId: string;

  @ApiProperty({
    default:"PAPAS"
  })
  @Column("text")
  productName: string;

  @ApiProperty({
    default:"$20"
  })
  @Column("float")
  price: number;

  @ApiProperty({
    default:"500"
  })
  @Column("int")
  countSeal: number;
  @ManyToOne(()=>Provider,(provider)=>provider.products,{
  })
  @JoinColumn({
    name: 'providerId',
  })
  provider: Provider
}
