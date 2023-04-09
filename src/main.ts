import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
const cloud='mqps://cnbgswus:KqwjuTc8DFf2mmFGfY-uHy2JljgyEgoU@rat.rmq2.cloudamqp.com/cnbgswus'
  const local='amqp://admin:admin@localhost:5672'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const app_mc = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport:Transport.RMQ,
      options:{
      urls:[local],
      queue:'GATE_WAY_QUEUE',
      queueOptions: {
        durable: false,
        
      },

  }
    },
  );
  await app.listen(3000);
  app_mc.listen()
}
bootstrap();
