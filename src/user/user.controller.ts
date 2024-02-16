import { Body, Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path'
import { extname } from 'path'


// export const storage = diskStorage({
//     destination: './uploads',
//     filename: (req, file, cb) => {
//         const name = file.originalname.split('.')[0];
//         const extension = extname(file.originalname);
//         const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
//         cb(null, `${name}-${randomName}${extension}`);
//     },
// });

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<{ message: string, user: User }> {
        try {
            const user = await this.userService.createUser(createUserDto);
            console.log(user);
            return { message: 'User created successfully', user };
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get('users')
    async findAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers();
    }


    @Post('/upload-image')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads/images',
            filename: (req, file, cb) => {
                const filename = file.originalname + + Math.round(Math.random() * 1E9);
                const fileExtension = path.extname(file.originalname);
                const newFileName = `${filename}${fileExtension}`;
                cb(null, newFileName);
            }
        })
    }))
    imageAdd(@UploadedFile() image: Express.Multer.File) {
        console.log(image);
        return {
            message: 'Image uploaded successfully',
        }
    }

}
