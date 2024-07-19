export const ariaSortOrders = ['none', 'ascending', 'descending'] as const;

export type SortOrder = (typeof ariaSortOrders)[number];
export type InitialSort = { sortOrder: SortOrder; sortKey: string };
