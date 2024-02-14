import { Module} from '@nestjs/common';
import { usersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DetailsModule } from './details/details.module';
import { User } from './user/user.entity';
import { Details } from './details/details.entity';
import { BloogGroupModule } from './bloog-group/bloog-group.module';
import { BloodGroup } from './bloog-group/blood-group.entity';
import { PostModule } from './post/post.module';
import { Post } from './post/post.entity'
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '636deadline',
      database: process.env.DB_NAME || 'test-project',
      synchronize: true,
      entities: [User, Details, BloodGroup, Post]
    }),
    usersModule,
    UserModule,
    DetailsModule,
    BloogGroupModule,
    PostModule,
    RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
