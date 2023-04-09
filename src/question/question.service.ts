import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class QuestionService {

constructor(@Inject('QUESTION_NODE') private _questionClient:ClientProxy){}

async createQuestion(questionPattern,questionConfig){
    return this._questionClient.emit(questionPattern,questionConfig)
}

async getQuestionByRequirments(questionPattern,requirements){
    //console.log("questionPattern,requirements ",questionPattern,requirements)
    return this._questionClient.emit(questionPattern,requirements)
}

}
