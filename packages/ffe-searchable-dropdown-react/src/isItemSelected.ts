export const isItemSelected = <Item extends Record<string, any>>(
    isEqual: (itemA: Item, itemB: Item) => boolean,
    item: Item,
    selectedItems?: Item[],
) => !!selectedItems?.some(selected => isEqual(item, selected));
