import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "../../products/entities/product.entity";
import { ApiProperty} from "@nestjs/swagger";

@Entity()
export class Provider {
    @ApiProperty({
        default:"UUID"
    })
    @PrimaryGeneratedColumn('uuid')
    providerId: string;

    @ApiProperty({
        default: "ProviderAngel"
    })
    @Column('text')
    providerName: string;

    @ApiProperty({
        default: "provideremail@gmail.com"
    })
    @Column('text',{
        unique: true,
    })
    providerEmail: string;

    @ApiProperty({
        default: "4426131618"
    })
    @Column({
        type: "text",
        nullable: true,
    })
    providerPhoneNumber: string;
    @OneToMany(() => Product, (photo) => photo.provider)
    products: Product[];

}
