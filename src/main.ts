import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('../uploads/images', express.static('uploads'));

  await app.listen(3001);
}
bootstrap();
