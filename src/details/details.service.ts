import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Details } from './details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {

    constructor(
        @InjectRepository(Details)
        private readonly memberRepository: Repository<Details>,
    ) { }

    async createDetails(memberData: Partial<Details>): Promise<Details> {
        const details = this.memberRepository.create(memberData);
        console.log(details);
        return await this.memberRepository.save(details);
    }

}
