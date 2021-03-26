import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';

<div>
    <h3 className="ffe-h4">Ved å bruke FFE får du</h3>
    <CheckList columns={2}>
        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>
        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>
        <CheckListItem>Høyere utviklingshastighet</CheckListItem>
        <CheckListItem isCross={true}>Flere bugs</CheckListItem>
        <CheckListItem isCross={true}>Mindre tid</CheckListItem>
    </CheckList>
</div>
