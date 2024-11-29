export type ValueOf<T> = T[keyof T];

export type PropertyType<T, K extends keyof T> = T[K];
