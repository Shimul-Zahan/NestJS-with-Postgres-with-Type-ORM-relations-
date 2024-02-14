/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString, IsEmail, IsOptional, IsBoolean, ValidateNested } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    adress: string;

}
