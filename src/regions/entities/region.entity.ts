import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Location } from 'src/locations/entities/location.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Region {
   @ApiProperty({
      default: "regioniD"
   })
   @PrimaryGeneratedColumn('increment')
   regionId: number;
   
   @ApiProperty({
      default: "Mexico"
   })
   @Column('text')
   regionName: string;

   @ApiProperty({
      default:"Queretaro"
   })
   @Column('simple-array')
   regionStates: string[];

   @OneToMany(() =>Location, (location) => location.region)
   location:Location[];
}