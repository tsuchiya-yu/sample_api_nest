
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateSampleInput {
    id: number;
    title?: Nullable<string>;
    content: string;
}

export class UpdateSampleInput {
    id: number;
}

export class UserCreateInput {
    name: string;
    email: string;
    password: string;
    isDeleted?: Nullable<boolean>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class SignInUserArgs {
    email: string;
    password: string;
}

export class Sample {
    id: number;
    title?: Nullable<string>;
    content: string;
}

export abstract class IQuery {
    abstract samples(): Nullable<Sample>[] | Promise<Nullable<Sample>[]>;

    abstract sample(id: number): Nullable<Sample> | Promise<Nullable<Sample>>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract dummyUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createSample(createSampleInput: CreateSampleInput): Sample | Promise<Sample>;

    abstract updateSample(updateSampleInput: UpdateSampleInput): Sample | Promise<Sample>;

    abstract removeSample(id: number): Nullable<Sample> | Promise<Nullable<Sample>>;

    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract signIn(data: SignInUserArgs): Token | Promise<Token>;

    abstract signOut(): CodeMeg | Promise<CodeMeg>;
}

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    isDeleted: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class CodeMeg {
    statusCode: number;
    message: string;
}

export class Token {
    token: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
