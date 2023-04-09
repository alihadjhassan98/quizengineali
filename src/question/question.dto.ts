import { IsEnum, IsNotEmpty, IsNumber, IsString, IS_ALPHA } from 'class-validator'
import {QuestionDifficultyEnum, QuestionLanguageEnum, QuestionTypeEnum} from './../enums/question.enum'
export class QuestionDto {
    @IsNotEmpty()
    @IsString()
    name;

    @IsNotEmpty()
    @IsString()
    tag;
    
    @IsNotEmpty()
    @IsEnum(QuestionDifficultyEnum)
    difficulty:QuestionDifficultyEnum;

    @IsNotEmpty()
    @IsEnum(QuestionLanguageEnum)
    language:QuestionLanguageEnum;

    @IsNotEmpty()
    @IsEnum(QuestionTypeEnum)
    type:QuestionTypeEnum;
}