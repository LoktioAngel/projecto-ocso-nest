import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ConnectionCheckedOutEvent, ReturnDocument } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { TOKEN_NAME } from './constants/jwt.constants';
import { Response } from 'express';
import { Cookies } from './decorators/cookies.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post("register/employee/[id]")
  registerEmployee(
    @Body() createUserDto: CreateUserDto,
    @Param("id") id: string,
  ) {
    if (
      createUserDto.userRoles.includes("Admin") ||
      createUserDto.userRoles.includes("Manager")
    ) {
      throw new BadRequestException("Rol inválido");
    }
    return this.authService.registerEmployee(id, createUserDto);
  }
  

  @Post("register/manager")
  registerManager(
    @Body() createUserDto: CreateUserDto,
    @Param("id") id: string,
  ) {
    if (
      createUserDto.userRoles.includes("Admin") ||
      createUserDto.userRoles.includes("Employee")
    ) {
      throw new BadRequestException("Rol inválido");
    }
    return this.authService.registerManager(id, createUserDto);
  }
  

  @Post("login")
  async login(@Body() loginUserDto :LoginUserDto, @Res({passthrough: true}) response: Response, @Cookies() cookies: any){
    const token = await this.authService.loginUser(loginUserDto)
    let expireDate= new Date()
    expireDate.setDate(expireDate.getDate()+7)
    console.log(token)
    response.cookie(TOKEN_NAME, token, {
      httpOnly: false,
      secure: true,
      sameSite: 'none',
      expires: expireDate,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });
    
    return;
  }
  @Patch("/:email")
  updateUser(@Param ('email') userEmail: string, @Body() UpdateUserDto: UpdateUserDto ){
    return this.authService.updateUser(userEmail, UpdateUserDto)
  }
}
