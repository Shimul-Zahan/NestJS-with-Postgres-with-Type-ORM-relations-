/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString, IsEmail, IsOptional, IsBoolean, ValidateNested } from 'class-validator';
import { JoinColumn } from 'typeorm';

export class CreatePostDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    content: string;

}
