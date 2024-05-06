export type DistributiveOmit<T, Omitted extends PropertyKey> = T extends any
    ? Omit<T, Omitted>
    : never;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
