import {
    ButtonGroup,
    ActionButton,
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from '@sb1/ffe-buttons-react';

<>
    <ButtonGroup inline={true}>
        <ActionButton>Neste</ActionButton>
        <ActionButton element="a" href="#buttongroup">
            Lenke
        </ActionButton>
        <SecondaryButton>Avbryt</SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>Hopp over</TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
    <ButtonGroup inline={true}>
        <PrimaryButton>Neste</PrimaryButton>
        <PrimaryButton element="a" href="#buttongroup">
            Lenke
        </PrimaryButton>
        <SecondaryButton>Avbryt</SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>Hopp over</TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
</>;
