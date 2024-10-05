import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Location } from 'src/locations/entities/location.entity';

@Entity()
export class Region {
   @PrimaryGeneratedColumn('increment')
   regionId: number;
   
   @Column('text')
   regionName: string;
   
   @Column('simple-array')
   regionStates: string[];

   @OneToMany(() =>Location, (location) => location.region)
   location:Location[];
}