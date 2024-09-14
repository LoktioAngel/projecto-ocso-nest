import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {v4 as uuid } from 'uuid';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] =[{
    id: uuid(),
    name: "alberto",
    lastName: "costas",
    phoneNumber: "xxxxxxx"
  },
  {
    id: uuid(),
    name: "Jose",
    lastName: "Pérez",
    phoneNumber: "xxxx2"
  }
  ]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id=uuid()
    this.employees.push(createEmployeeDto)
    return createEmployeeDto;
  }

  findAll() {
    //retornar todos los empleados
    return this.employees;
  }

  findOne(id: string) {
    const employee = this.employees.filter((employees)=>employees.id== id)[0];
    if(!employee) throw new NotFoundException();
    return employee;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate =this.findOne(id);
    employeeToUpdate ={
      ...employeeToUpdate, //pasamos datos actuales delempleado
      ...updateEmployeeDto //pasanos datos nuevos
    }
    this.employees =this.employees.map ((employee)=>{
      if(employee.id == id){
        employee=employeeToUpdate
      }
      return employee
    })
    return employeeToUpdate;
  }

  remove(id: string) {
    this.findOne(id)
    this.employees = this.employees.filter((employees) =>employees.id !=id );
    return this.employees
  }
}
