import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ExamService {
constructor(@Inject('EXAM_NODE') private _examClient:ClientProxy){

}
async find(id:string,examPattern:string){
    return this._examClient.emit(examPattern,{id});
}
async findAll(examPattern){
    return this._examClient.emit(examPattern,'up');
}
async createExam(examPattern,examConfig) {
    
    return this._examClient.emit(examPattern,examConfig);
 
}

}
