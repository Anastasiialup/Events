import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(3000);
  console.log('🚀 Backend launched at http://localhost:3000/graphql');
}
bootstrap();
