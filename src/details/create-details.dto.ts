/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString, IsEmail, IsOptional, IsBoolean, ValidateNested } from 'class-validator';

export class CreateDetailsDto {

    @IsString()
    gender: string;

    @IsString()
    country: string;

}
