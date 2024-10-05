import { IsEmail, IsObject, isObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Employee } from "../entities/employee.entity";
import { Location } from "src/locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class LocationEmployeeDto extends Location{
  @ApiProperty()
  locationId: number;
  @ApiPropertyOptional()
  locationName: string;
  @ApiPropertyOptional()
  locationAddress: string;
  @ApiPropertyOptional()
  locationLatLng: number[];
  
}

export class CreateEmployeeDto extends Employee{
  @ApiProperty()
  @IsString()
  @MaxLength(30)
  employeeName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(70)
  employeeLastName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(10)
  employeePhoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  employeeEmail: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  location: LocationEmployeeDto;
}

