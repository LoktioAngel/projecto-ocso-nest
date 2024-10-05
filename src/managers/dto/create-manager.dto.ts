import { isStringObject } from "util/types";
import { Manager } from "../entities/manager.entity";
import { IsEmail, IsNumber, IsString, isString, MaxLength } from "class-validator";

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
}
