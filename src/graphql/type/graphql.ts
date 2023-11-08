
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum SiteUpdatesScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    publishedAt = "publishedAt",
    updatedAt = "updatedAt"
}

export class CreateSampleInput {
    id: number;
    title?: Nullable<string>;
    content: string;
}

export class UpdateSampleInput {
    id: number;
}

export class SiteUpdatesWhereInput {
    id?: Nullable<IntFilter>;
    title?: Nullable<StringFilter>;
    content?: Nullable<StringFilter>;
    publishedAt?: Nullable<DateTimeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class SiteUpdatesWhereUniqueInput {
    id?: Nullable<number>;
}

export class SiteUpdatesOrderByWithRelationInput {
    id?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    content?: Nullable<SortOrder>;
    publishedAt?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class IntFilter {
    equals?: Nullable<number>;
    in?: Nullable<Nullable<number>[]>;
    notIn?: Nullable<Nullable<number>[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
}

export class StringFilter {
    equals?: Nullable<string>;
    in?: Nullable<Nullable<string>[]>;
    notIn?: Nullable<Nullable<string>[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    not?: Nullable<NestedStringFilter>;
}

export class NestedIntFilter {
    equals?: Nullable<number>;
    in?: Nullable<Nullable<number>[]>;
    notIn?: Nullable<Nullable<number>[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
}

export class NestedStringFilter {
    equals?: Nullable<string>;
    in?: Nullable<Nullable<string>[]>;
    notIn?: Nullable<Nullable<string>[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    not?: Nullable<NestedStringFilter>;
}

export class DateTimeFilter {
    equals?: Nullable<DateTime>;
    in?: Nullable<Nullable<DateTime>[]>;
    notIn?: Nullable<Nullable<DateTime>[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
}

export class NestedDateTimeFilter {
    equals?: Nullable<DateTime>;
    in?: Nullable<Nullable<DateTime>[]>;
    notIn?: Nullable<Nullable<DateTime>[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
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

    abstract siteUpdates(where?: Nullable<SiteUpdatesWhereInput>, orderBy?: Nullable<Nullable<SiteUpdatesOrderByWithRelationInput>[]>, cursor?: Nullable<SiteUpdatesWhereUniqueInput>, take?: Nullable<number>, skip?: Nullable<number>, distinct?: Nullable<Nullable<SiteUpdatesScalarFieldEnum>[]>): Nullable<Nullable<SiteUpdates>[]> | Promise<Nullable<Nullable<SiteUpdates>[]>>;

    abstract siteUpdate(id: number): Nullable<SiteUpdates> | Promise<Nullable<SiteUpdates>>;

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

export class SiteUpdates {
    id: number;
    title: string;
    content: string;
    publishedAt: DateTime;
    updatedAt: DateTime;
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
