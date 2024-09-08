import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] =[{
    id: 1,
    name: "alberto",
    lastName: "costas",
    phoneNumber: "xxxxxxx"
  },
  {
    id: 2,
    name: "Jose",
    lastName: "Pérez",
    phoneNumber: "xxxx2"
  }
  ]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id=this.employees.length +1
    this.employees.push(createEmployeeDto)
    return createEmployeeDto;
  }

  findAll() {
    //retornar todos los empleados
    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.filter((employees)=>employees.id== id)[0];
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
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

  remove(id: number) {
    this.employees = this.employees.filter((employees) =>employees.id !=id );
    return this.employees
  }
}
