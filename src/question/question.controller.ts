import { Body, Controller, Get, Post, Request } from '@nestjs/common';

import { QuestionDto } from './question.dto';
import {QuestionPatterns} from '../enums/question.enum'
import { QuestionService } from './question.service';
import { EventPattern, Payload } from '@nestjs/microservices';
@Controller('question')
export class QuestionController {

constructor(private _questionService:QuestionService){}
    @Post()
    createQuestion(@Request()req, @Body() body:QuestionDto){
        console.log('question ',body);
        this._questionService.createQuestion(QuestionPatterns.ADD_QUESTION,body)
        return 'question created';
    }

    @EventPattern(QuestionPatterns.QUESTION_REPLY)
    async receive(@Payload()data:any){
        console.log('data ',data)
    }
}
