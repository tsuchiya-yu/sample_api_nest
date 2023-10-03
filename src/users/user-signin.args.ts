import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@ArgsType()
export class SignInUserArgs {
    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsString()
    password: string;
}
