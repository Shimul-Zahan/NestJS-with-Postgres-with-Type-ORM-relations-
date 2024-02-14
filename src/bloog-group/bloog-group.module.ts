import { Module } from '@nestjs/common';
import { BloogGroupController } from './bloog-group.controller';
import { BloogGroupService } from './bloog-group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodGroup } from './blood-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodGroup])],
  controllers: [BloogGroupController],
  providers: [BloogGroupService]
})
export class BloogGroupModule {}
