import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamController } from './exam/exam.controller';
import { ExamService } from './exam/exam.service';
import { QuestionController } from './question/question.controller';

import { QuestionService } from './question/question.service';

const cloud='amqps://cnbgswus:KqwjuTc8DFf2mmFGfY-uHy2JljgyEgoU@rat.rmq2.cloudamqp.com/cnbgswus';
const local='amqp://admin:admin@localhost:5672'

@Module({
  imports: [
ClientsModule.register([
{
  name:'EXAM_NODE',
  transport:Transport.RMQ,
  options:{
      urls:[local],
      queue:'exam_queue',
      noAck: false,
      queueOptions: {
        durable: false,
      },
  }
},{
  name:'QUESTION_NODE',
  transport:Transport.RMQ,
  options:{
      urls:[local],
      queue:'question_queue',
      noAck: false,
      queueOptions: {
        durable: false,
      },
  }
}

]), 
  ],
  controllers: [AppController, ExamController, QuestionController],
  providers: [AppService, ExamService,QuestionService],
})
export class AppModule {}
