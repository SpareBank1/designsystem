import { DetailList, Detail, DetailContent } from '@sb1/ffe-details-list-react';
import { TertiaryButton } from '@sb1/ffe-buttons-react';

<DetailList>
    <Detail label="Egenandel">
        <DetailContent>4 000,-</DetailContent>
    </Detail>

    <Detail label="Egenandel">
        <DetailContent>4 000,-</DetailContent>
        <DetailContent cta={true}>
            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>
        </DetailContent>
    </Detail>

    <Detail label="Kjørelengde per år">
        <DetailContent>30 000 km</DetailContent>
        <DetailContent className="ffe-small-text">
            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017
        </DetailContent>
    </Detail>

    <Detail label="Kjørelengde per år">
        <DetailContent>30 000 km</DetailContent>
        <DetailContent className="ffe-small-text">
            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017
        </DetailContent>
        <DetailContent cta={true}>
            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>
        </DetailContent>
    </Detail>
</DetailList>
