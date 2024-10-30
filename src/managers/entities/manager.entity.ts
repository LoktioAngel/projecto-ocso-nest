import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from 'src/locations/entities/location.entity'; 
import { User } from 'src/auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Manager {
   @ApiProperty({
      default: "UUID"
   })
   @PrimaryGeneratedColumn('uuid')
   managerId: string;

   @ApiProperty({
      default: "Angel Gabriel"
   })
   @Column('text')
   managerFullName: string;

   @ApiProperty({
      default: "2000"
   })
   @Column('float')
   managerSalary: number;

   @ApiProperty({
      default:"manager@gmail.com"
   })
   @Column('text',{
    unique: true,
   })
   managerEmail: string;

   @ApiProperty({
      default: "4426131618"
   })
   @Column('text')
   managerPhoneNumber: string;

   @OneToOne(()=> Location)
   @JoinColumn({
      name: "locationId"
   })
   location: Location | string;

   @OneToOne(() => User)
   @JoinColumn({
    name: "UserId"
   })
   user: User
}
