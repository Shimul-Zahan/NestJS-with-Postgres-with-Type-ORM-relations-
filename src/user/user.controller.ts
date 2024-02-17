import { Body, Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path'
import * as fs from 'fs';


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads/images',
            filename: (req, file, cb) => {
                const sanitizedFilename = file.originalname.replace(/\\/g, '/');
                const filename = sanitizedFilename + Math.round(Math.random() * 1E9);
                const fileExtension = path.extname(file.originalname);
                const newFileName = `${filename}${fileExtension}`;
                cb(null, newFileName);
            }
        })
    }))

    async createUser(@UploadedFile() image: Express.Multer.File, @Body() createUserDto: CreateUserDto): Promise<{ message: string, user: User }> {
        try {
            createUserDto.image = image.path;
            console.log('from controller 2', image);
            const user = await this.userService.createUser(createUserDto);
            console.log(user);
            return { message: 'User created successfully', user };
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('')
    async findAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers();
    }

}
