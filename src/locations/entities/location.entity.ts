import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/employees/entities/employee.entity';
import { Manager } from 'src/managers/entities/manager.entity';
import { Region } from 'src/regions/entities/region.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('increment')
  locationId: number;

  @ApiProperty({
    default: "OCSO Juriquilla"
  })
  @Column('text')
  locationName: string;

  @ApiProperty({
    default: "Avebuda Tal, S/N, 76220"
  })
  @Column('text')
  locationAddress: string;

  @ApiProperty({
    default: [12,12]
  })
  @Column('simple-array')
  locationLatLng: number[];

  @OneToOne(()=>Manager,{
    eager:true,
  })
  @JoinColumn({
    name: 'managerId'
  })
  manager: Manager;

  @ManyToOne(()=>Region,(Region)=>Region.location)
  @JoinColumn({
    name:'regionId'
  })
  region: Region
  @OneToMany(()=>Employee,(employee)=>employee.location)
  employees: Employee[];
}
