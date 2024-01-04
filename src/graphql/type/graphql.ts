
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ShopMstScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

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

export class ShopMstWhereInput {
    id?: Nullable<IntFilter>;
    code?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    isDeleted?: Nullable<BooleanFilter>;
    createdAt?: Nullable<DateTimeFilter>;
    updatedAt?: Nullable<DateTimeFilter>;
}

export class ShopMstWhereUniqueInput {
    id?: Nullable<number>;
    code?: Nullable<string>;
}

export class ShopMstOrderByWithRelationInput {
    id?: Nullable<SortOrder>;
    code?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    isDeleted?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class BooleanFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBooleanFilter>;
}

export class NestedBooleanFilter {
    equals?: Nullable<boolean>;
    not?: Nullable<NestedBooleanFilter>;
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

export class CreateUserProfileInput {
    catchphrase?: Nullable<string>;
    introduction?: Nullable<string>;
    user: UserCreateNestedOneWithoutUserProfileInput;
    shopMst?: Nullable<ShopMstCreateNestedOneWithoutUserProfilesInput>;
}

export class UpdateUserProfileInput {
    catchphrase?: Nullable<string>;
    introduction?: Nullable<string>;
    shopMst?: Nullable<ShopMstUpdateOneWithoutUserProfilesInput>;
}

export class UserCreateNestedOneWithoutUserProfileInput {
    connect?: Nullable<UserWhereUniqueInput>;
}

export class UserWhereUniqueInput {
    email?: Nullable<string>;
}

export class ShopMstCreateNestedOneWithoutUserProfilesInput {
    connect?: Nullable<ShopMstWhereUniqueInput>;
}

export class ShopMstUpdateOneWithoutUserProfilesInput {
    connect?: Nullable<ShopMstConnectInput>;
}

export class ShopMstConnectInput {
    code?: Nullable<string>;
}

export class UserSnsCreateInput {
    user: UserCreateNestedOneWithoutUserSnsInput;
    x?: Nullable<string>;
    facebook?: Nullable<string>;
    instagram?: Nullable<string>;
}

export class UpdateUserSnsInput {
    x?: Nullable<string>;
    facebook?: Nullable<string>;
    instagram?: Nullable<string>;
}

export class UserCreateNestedOneWithoutUserSnsInput {
    connect?: Nullable<UserWhereUniqueInput>;
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

export class UserUpdateInput {
    name?: Nullable<string>;
}

export class ShopMst {
    id: number;
    code: string;
    name: string;
    isDeleted: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export abstract class IQuery {
    abstract shopMsts(where?: Nullable<ShopMstWhereInput>, orderBy?: Nullable<Nullable<ShopMstOrderByWithRelationInput>[]>, cursor?: Nullable<ShopMstWhereUniqueInput>, take?: Nullable<number>, skip?: Nullable<number>, distinct?: Nullable<Nullable<ShopMstScalarFieldEnum>[]>): Nullable<Nullable<ShopMst>[]> | Promise<Nullable<Nullable<ShopMst>[]>>;

    abstract siteUpdates(where?: Nullable<SiteUpdatesWhereInput>, orderBy?: Nullable<Nullable<SiteUpdatesOrderByWithRelationInput>[]>, cursor?: Nullable<SiteUpdatesWhereUniqueInput>, take?: Nullable<number>, skip?: Nullable<number>, distinct?: Nullable<Nullable<SiteUpdatesScalarFieldEnum>[]>): Nullable<Nullable<SiteUpdates>[]> | Promise<Nullable<Nullable<SiteUpdates>[]>>;

    abstract siteUpdate(id: number): Nullable<SiteUpdates> | Promise<Nullable<SiteUpdates>>;

    abstract userProfile(id: number): Nullable<UserProfile> | Promise<Nullable<UserProfile>>;

    abstract userProfiles(): Nullable<UserProfile[]> | Promise<Nullable<UserProfile[]>>;

    abstract userSns(id: number): Nullable<UserSns> | Promise<Nullable<UserSns>>;

    abstract userSnsList(): Nullable<UserSns[]> | Promise<Nullable<UserSns[]>>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract dummyUser(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract isUserLoggedIn(): boolean | Promise<boolean>;

    abstract currentUser(): Nullable<User> | Promise<Nullable<User>>;
}

export class SiteUpdates {
    id: number;
    title: string;
    content: string;
    publishedAt: DateTime;
    updatedAt: DateTime;
}

export class UserProfile {
    id: number;
    userId: number;
    shopMstCode?: Nullable<string>;
    catchphrase?: Nullable<string>;
    introduction?: Nullable<string>;
    createdAt: string;
    updatedAt: string;
    user?: Nullable<User>;
    shopMst?: Nullable<ShopMst>;
}

export abstract class IMutation {
    abstract createUserProfile(data: CreateUserProfileInput): UserProfile | Promise<UserProfile>;

    abstract updateUserProfile(id: number, data: UpdateUserProfileInput): UserProfile | Promise<UserProfile>;

    abstract createUserSns(data: UserSnsCreateInput): UserSns | Promise<UserSns>;

    abstract updateUserSns(id: number, data: UpdateUserSnsInput): UserSns | Promise<UserSns>;

    abstract createUser(data: UserCreateInput): Token | Promise<Token>;

    abstract signIn(data: SignInUserArgs): Token | Promise<Token>;

    abstract signOut(): CodeMeg | Promise<CodeMeg>;

    abstract updateUser(id: number, data: UserUpdateInput): User | Promise<User>;
}

export class UserSns {
    id: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
    x?: Nullable<string>;
    facebook?: Nullable<string>;
    instagram?: Nullable<string>;
}

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    isDeleted: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
    userSns?: Nullable<UserSns>;
    userProfile?: Nullable<UserProfile>;
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
