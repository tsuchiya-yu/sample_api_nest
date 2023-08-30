
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

export class Sample {
    id: number;
    title?: Nullable<string>;
    content: string;
}

export abstract class IQuery {
    abstract samples(): Nullable<Sample>[] | Promise<Nullable<Sample>[]>;

    abstract sample(id: number): Nullable<Sample> | Promise<Nullable<Sample>>;
}

export abstract class IMutation {
    abstract createSample(createSampleInput: CreateSampleInput): Sample | Promise<Sample>;

    abstract updateSample(updateSampleInput: UpdateSampleInput): Sample | Promise<Sample>;

    abstract removeSample(id: number): Nullable<Sample> | Promise<Nullable<Sample>>;
}

type Nullable<T> = T | null;
