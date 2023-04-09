import { Controller, Param ,Get, Inject, Post, Body} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ExamConfigDto } from './examConfig.dto';
import { ExamService } from './exam.service';
import{ExamPatterns} from './../enums/exam.enum'
import { QuestionService } from 'src/question/question.service';
import { QuestionPatterns } from 'src/enums/question.enum';


@Controller('exam')
export class ExamController {
    constructor(private _examService:ExamService,private _questionService:QuestionService){}

@Get()
apiTest(){
return 'test api return Hello'
}

@Get('id/:id')
find(@Param('id') examId:string){
this._examService.find(examId,ExamPatterns.GET_BY_ID)
return 'Command Exam get by id Is Executed';
}
@Get('/all')
findAll(){
this._examService.findAll(ExamPatterns.GET_ALL)
return 'Command Exam get all Is Executed';
}
@Post('')
async addExam(@Body() examConfig:ExamConfigDto){
let questionsList=await this._questionService.getQuestionByRequirments(QuestionPatterns.GET_QUESTION_BY_REQUIRMENTS,examConfig.requirements)
//let createdExam=await this._examService.createExam(ExamPatterns.ADD_EXAM,questionsList)
return 'Command Exam get all Is Executed';
}



}
