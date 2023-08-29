
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateSampleInput {
    id?: Nullable<number>;
}

export class UpdateSampleInput {
    id: number;
}

export class Sample {
    id?: Nullable<number>;
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
