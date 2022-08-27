
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    balance?: Nullable<number>;
    stores?: Nullable<Nullable<Store>[]>;
}

export interface Store {
    id: number;
    name: string;
    products?: Nullable<Nullable<Product>[]>;
}

type Nullable<T> = T | null;
