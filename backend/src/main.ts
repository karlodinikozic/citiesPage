import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  config();

  app.enableCors({
    origin: '*',
    methods: ['GET'],
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);
}

bootstrap();
