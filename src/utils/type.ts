export type ValueOf<T> = T[keyof T];

export type PropertyType<T, K extends keyof T> = T[K];

export type DeepReadonly<T> = {
	readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
