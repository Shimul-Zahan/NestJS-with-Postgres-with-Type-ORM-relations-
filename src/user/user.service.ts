import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createUser(memberData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(memberData);
        console.log(user);
        return await this.userRepository.save(user);
    }


    async findAllUsers(): Promise<User[]> {
        return this.userRepository.find({ relations: ['details', 'bloodGroup', 'posts', 'roles'] });
    }
}
