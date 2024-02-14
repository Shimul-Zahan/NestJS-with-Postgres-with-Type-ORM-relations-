import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { DetailsService } from './details.service';
import { CreateDetailsDto } from './create-details.dto';
import { Details } from './details.entity';

@Controller('details')
export class DetailsController {

    constructor(private readonly detailsService: DetailsService) { }

    @Post()
    async createUser(@Body() createDetailsDto: CreateDetailsDto): Promise<{ message: string, details: Details }> {
        try {
            const details = await this.detailsService.createDetails(createDetailsDto);
            console.log(details);
            return { message: 'User created successfully', details };
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
