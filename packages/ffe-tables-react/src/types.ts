export const ariaSortOrders = ['none', 'ascending', 'descending'] as const;

export type SortOrder = (typeof ariaSortOrders)[number];
