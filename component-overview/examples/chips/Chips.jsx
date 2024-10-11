import { useState } from 'react';
import { Chip, ChipRemovable, ChipSelectable } from '@sb1/ffe-chips-react';

() => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelected = () => setIsSelected(prev => !prev);

    return (
        <div
            style={{
                display: 'grid',
                columnGap: 8,
                rowGap: 16,
                gridTemplateColumns: 'auto auto auto',
                width: 'fit-content',
            }}
        >
            <div>
                <Chip type="button" size="sm">
                    Default
                </Chip>
            </div>
            <div>
                <Chip type="button" size="md">
                    Default
                </Chip>
            </div>
            <div>
                <Chip type="button" size="lg">
                    Default
                </Chip>
            </div>
            <div>
                <ChipSelectable
                    type="button"
                    size="sm"
                    isSelected={isSelected}
                    onClick={toggleSelected}
                >
                    Selectable
                </ChipSelectable>
            </div>
            <div>
                <ChipSelectable
                    type="button"
                    size="md"
                    isSelected={isSelected}
                    onClick={toggleSelected}
                >
                    Selectable
                </ChipSelectable>
            </div>
            <div>
                <ChipSelectable
                    type="button"
                    size="lg"
                    isSelected={isSelected}
                    onClick={toggleSelected}
                >
                    Selectable
                </ChipSelectable>
            </div>
            <div>
                <ChipRemovable type="button" size="sm">
                    Removable
                </ChipRemovable>
            </div>
            <div>
                <ChipRemovable type="button" size="md">
                    Removable
                </ChipRemovable>
            </div>
            <div>
                <ChipRemovable type="button" size="lg">
                    Removable
                </ChipRemovable>
            </div>
        </div>
    );
};
