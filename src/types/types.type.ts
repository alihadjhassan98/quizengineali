import { QuestionTypeEnum } from "src/enums/question.enum"


export type QuestionRequirements={
    type:QuestionTypeEnum,
    tag:string,
    numberOfQuestions:number
}