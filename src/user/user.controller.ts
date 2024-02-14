import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

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


    @Get('users') // Adjusted the path here
    async findAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers();
    }

}
