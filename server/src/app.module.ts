import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './features/users/user.entity';
import { UserService } from './features/users/users.service';
import { UsersController } from './features/users/users.controller';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Necessary for reading .env files. .env files should be in root server folder to be read or custom path is required
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UserEntity],
      synchronize: true, // Cannot be set to true for production
      logging: true, // logs changes to database in the the terminal
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
