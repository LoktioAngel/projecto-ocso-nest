import { isStringObject } from "util/types";
import { Manager } from "../entities/manager.entity";
import { IsEmail, IsNumber, IsObject, IsOptional, IsString, isString, MaxLength } from "class-validator";
import { Location } from "src/locations/entities/location.entity";

export class CreateManagerDto extends Manager{
    @IsString()
    @MaxLength(80)
    managerFullName: string;
    @IsString()
    @IsEmail()
    managerEmail: string;
    @IsNumber()
    managerSalary: number;
    @IsString()
    @MaxLength(16)
    managerPhoneNumber: string;

    @IsNumber()
    @IsOptional()
    location: Location;
}
