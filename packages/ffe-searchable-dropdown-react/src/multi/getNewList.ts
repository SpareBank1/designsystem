export const getNewList = <Item extends Record<string, any>>(
    selectedItems: Item[],
    changedItems: Item[],
    actionType: 'selected' | 'removed',
    isEqual: (itemA: Item, itemB: Item) => boolean,
): Item[] => {
    if (actionType === 'removed') {
        return selectedItems.filter(
            selectedItem =>
                !changedItems.some(changedItem =>
                    isEqual(selectedItem, changedItem),
                ),
        );
    }

    return selectedItems
        .concat(changedItems)
        .filter(
            (itemA, i, arr) =>
                arr.findIndex(itemB => isEqual(itemA, itemB)) === i,
        );
};

export const getActionType = <Item extends Record<string, any>>(
    selectedList: Item[],
    clickedElement: Item,
    isEqual: (itemA: Item, itemB: Item) => boolean,
): 'selected' | 'removed' =>
    selectedList?.some(selectedItem => isEqual(selectedItem, clickedElement))
        ? 'removed'
        : 'selected';
