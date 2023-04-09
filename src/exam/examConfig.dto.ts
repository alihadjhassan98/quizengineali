import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { QuestionRequirements } from 'src/types/types.type';

export class ExamConfigDto {

    @IsString()
    @IsNotEmpty()
    title;

    @IsString()
    @IsNotEmpty()
    category;

    @IsString()
    @IsNotEmpty()
    language

    @IsNumber()
    @IsNotEmpty()
    totaNumberOfQuestion;
    
    @IsArray()
    @IsNotEmpty()
    requirements:QuestionRequirements[];

}