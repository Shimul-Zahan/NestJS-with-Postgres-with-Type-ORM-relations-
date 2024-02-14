import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly memberRepository: Repository<User>,
    ) { }

    async createUser(memberData: Partial<User>): Promise<User> {
        const user = this.memberRepository.create(memberData);
        console.log(user);
        return await this.memberRepository.save(user);
    }


    async findAllUsers(): Promise<User[]> {
        return this.memberRepository.find({ relations: ['details', 'bloodGroup', 'posts', 'roles'] });
    }
}
