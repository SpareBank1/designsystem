import isEqual from 'lodash.isequal';

export const getNewList = <Item extends Record<string, any>>(
    selectedList: Item[],
    clickedElement: Item,
    actionType: 'selected' | 'removed',
): Item[] => {
    const newList =
        actionType === 'removed'
            ? selectedList?.filter(
                  selectedItem => !isEqual(selectedItem, clickedElement),
              )
            : [...selectedList, clickedElement];
    return newList;
};

export const getActionType = <Item extends Record<string, any>>(
    selectedList: Item[],
    clickedElement: Item,
): 'selected' | 'removed' => {
    const inList = (selectedList ?? []).some(selectedItem =>
        isEqual(selectedItem, clickedElement),
    );
    return inList ? 'removed' : 'selected';
};
