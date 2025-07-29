import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';
import { SecondaryButton, ShortcutButton } from '@sb1/ffe-buttons-react';
import { GroupCard, GroupCardElement, GroupCardFooter, GroupCardTitle, IconCard, IllustrationCard, ImageCard, StippledCard, TextCard } from '@sb1/ffe-cards-react';
import { Heading2, Heading3, Paragraph, SmallText } from '@sb1/ffe-core-react';
import { GridCol, GridRow } from '@sb1/ffe-grid-react';
import { Icon } from '@sb1/ffe-icons-react';
import arrowInwardIcon from '@sb1/ffe-icons/icons/open/300/sm/arrow_insert.svg';
import arrowOutwardIcon from '@sb1/ffe-icons/icons/open/300/sm/arrow_outward.svg';
import moneyIcon from '@sb1/ffe-icons/icons/open/300/sm/attach_money.svg';
import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';
import { Modal, ModalBlock, ModalHandle } from '@sb1/ffe-modals-react';
import {
    Table,
    TableBody,
    TableDataCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    TableRowExpandable,
} from '@sb1/ffe-tables-react';
import { clsx } from 'clsx';
import { useId, useRef, useState } from 'react';
import utvalgte from './utvalgte.svg';
import { Tag } from '@sb1/ffe-tags-react';


interface Transaction {
    date: string;
    description: string;
    amount: number;
    type: 'income' | 'expense' | 'transfer';
    details?: string; // Ekstra detaljer for modalen
}

const transactions: Transaction[] = [
    {
        date: '2024-02-21',
        description: 'REMA 1000 Oslo',
        amount: -245.5,
        type: 'expense',
        details: 'Dagligvarer kjøpt hos REMA 1000, Storgata.',
    },
    {
        date: '2024-02-21',
        description: 'Lønn fra SpareBank 1',
        amount: 32000,
        type: 'income',
        details: 'Månedlig lønnsutbetaling.',
    },
    {
        date: '2024-02-20',
        description: 'Netflix',
        amount: -99,
        type: 'expense',
        details: 'Månedsabonnement for Netflix streamingtjeneste.',
    },
    {
        date: '2024-02-19',
        description: 'Overføring til sparekonto',
        amount: -5000,
        type: 'transfer',
        details: 'Automatisk månedlig overføring.',
    },
];

export const AccountOverview = () => {
    const [_, setIsModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] =
        useState<Transaction | null>(null);
    const modalRef = useRef<ModalHandle>(null);
    const modalTitleId = useId();

    const handleTransactionClick = (transaction: Transaction) => {
        setSelectedTransaction(transaction);
        setIsModalOpen(true);
        modalRef.current?.open();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTransaction(null);
    };

    return (
        <>
            <GridRow>
                <GridCol sm={12} className='mt-4'>
                    <Heading2 noMargin={true}>Brukskonto</Heading2>
                    <SmallText>Bruk av Cards, Accordion og Table</SmallText>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol className='mt-4'>
                    <Paragraph>Kontonummer: 1234 56 78910</Paragraph>
                </GridCol>
                <GridCol sm={12} md={4}>
                    <IconCard
                        icon={<Icon fileUrl={moneyIcon} size="sm" />}
                        title="Disponibel saldo"
                        condensed={true}

                    >
                        {({ Title, Subtext }) => (
                            <>
                                <Title>34 344,5kr</Title>
                                <Subtext>Disponibelt</Subtext>
                            </>
                        )}
                    </IconCard>
                </GridCol>
                <GridCol sm={12} md={4}>
                    <IconCard
                        icon={<Icon fileUrl={arrowOutwardIcon} size="sm" />}
                        title="Utgående i dag"
                        condensed={true}

                    >
                        {({ Title, Subtext }) => (
                            <>
                                <Title>344,5kr</Title>
                                <Subtext>Utgående i dag</Subtext>
                            </>
                        )}
                    </IconCard>
                </GridCol>
                <GridCol sm={12} md={4}>
                    <IconCard
                        icon={<Icon fileUrl={arrowInwardIcon} size="sm" />}
                        title="Innkommende i dag"
                        condensed={true}

                    >
                        {({ Title, Subtext, CardAction }) => (
                            <>
                                <Title>
                                    <CardAction href="/kontoer">1224,9kr</CardAction>
                                </Title>
                                <Subtext>Innkommende i dag, klikkbart</Subtext>
                            </>
                        )}
                    </IconCard>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12} md={6}>
                    <TextCard>
                        {({ Title, Subtext, Text }) => (
                            <>
                                <Title>Du er på god vei</Title>
                                <div className='mb-2 mt-2'>
                                    <Tag type='subtle' variant='success'>Utmerket</Tag>
                                </div>
                                <Subtext as="span">Status så langt i år</Subtext>
                                <Text>
                                    Vi har vurdert at du har en god økonomi og
                                    at du er på god vei til å nå dine økonomiske mål.
                                </Text>
                            </>
                        )}
                    </TextCard>
                </GridCol>
                <GridCol sm={12} md={6}>
                    <StippledCard >
                        {({ CardName, Title, Subtext, Text }) => (
                            <>
                                <CardName>CardName</CardName>
                                <Title>Tittel</Title>
                                <Subtext as="span">Subtext er grå</Subtext>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Text>
                            </>
                        )}
                    </StippledCard>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12} md={6} className="mt-8">
                    <GroupCard>
                        <GroupCardTitle>
                            <Heading2 lookLike={5}>Andre kontoer</Heading2>
                        </GroupCardTitle>
                        <GroupCardElement>
                            {({
                                CardName,
                                Text
                            }) => <div className='flex justify-between items-center'>
                                    <CardName>Feriesparing</CardName>
                                    <Text>3000</Text>
                                </div>}
                        </GroupCardElement>
                        <GroupCardElement>
                            {({
                                CardName,
                                Text
                            }) => <div className='flex justify-between items-center'>
                                    <CardName>Hytta</CardName>
                                    <Text>5400</Text>
                                </div>}
                        </GroupCardElement>
                        <GroupCardElement>
                            {({
                                CardName,
                                Text
                            }) => <div className='flex justify-between items-center'>
                                    <CardName>Felles</CardName>
                                    <Text>981</Text>
                                </div>}
                        </GroupCardElement>
                        <GroupCardFooter>
                            {({ CardAction }) => (
                                <CardAction href="https://design.sparebank1.no">
                                    Vis mer
                                </CardAction>
                            )}
                        </GroupCardFooter>
                    </GroupCard>
                </GridCol>
                <GridCol sm={12} md={6} className="mt-8">
                    <IllustrationCard className="mb-1" img={<img src={utvalgte} alt="" />} condensed={true} noMargin={true}>
                        {({ CardName, Text }) => (
                            <>
                                <CardName>Kortnavn</CardName>
                                <Text>Her kan man ha tekst</Text>
                            </>
                        )}
                    </IllustrationCard>
                    <IllustrationCard className="mb-1" img={<img src={utvalgte} alt="" />} condensed={true} noMargin={true}>
                        {({ CardName, Text, CardAction }) => (
                            <>
                                <CardName>
                                    <CardAction as="a" href='/kontoer'>
                                        Kortnavn
                                    </CardAction>
                                </CardName>
                                <Text>Her kan man ha tekst</Text>
                            </>
                        )}
                    </IllustrationCard>
                    <IllustrationCard img={<img src={utvalgte} alt="" />} condensed={true} noMargin={true}>
                        {({ CardName, Text, CardAction }) => (
                            <>
                                <CardName>
                                    <CardAction as="a" href='/kontoer'>
                                        Kortnavn
                                    </CardAction>
                                </CardName>
                                <Text>Her kan man ha tekst</Text>
                            </>
                        )}
                    </IllustrationCard>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol>
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-4">
                            <Heading2>Siste transaksjoner</Heading2>
                            <ShortcutButton>
                                Se alle transaksjoner
                            </ShortcutButton>
                        </div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell scope="col">
                                        Dato
                                    </TableHeaderCell>
                                    <TableHeaderCell scope="col">
                                        Beskrivelse
                                    </TableHeaderCell>
                                    <TableHeaderCell
                                        scope="col"
                                        className="text-right"
                                    >
                                        Beløp
                                    </TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((tx, i) => (
                                    <TableRowExpandable
                                        key={i}
                                        expandContent={<>
                                            Mer info om transaksjonen:
                                            <SecondaryButton
                                                onClick={() =>
                                                    handleTransactionClick(
                                                        tx,
                                                    )
                                                }
                                                className="ml-2">
                                                Åpne mer info
                                            </SecondaryButton>
                                        </>}
                                    >
                                        <TableDataCell columnHeader="Dato">
                                            {tx.date}
                                        </TableDataCell>
                                        <TableDataCell columnHeader="Beskrivelse">
                                            {tx.description}
                                        </TableDataCell>
                                        <TableDataCell
                                            columnHeader="Beløp"
                                            className={clsx(
                                                'text-right',
                                                tx.type === 'income' &&
                                                'text-ffe-green-700',
                                                tx.type === 'expense' &&
                                                'text-ffe-red-700',
                                            )}
                                        >
                                            {tx.amount.toFixed(2)} kr
                                        </TableDataCell>
                                    </TableRowExpandable>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol className="mt-8">
                    <Heading3>Du lurer kanskje på?</Heading3>
                    <Accordion headingLevel={2}>
                        <AccordionItem heading="Hvor lang tid tar det før jeg fåt kortet som er bestilt?">
                            Det tar 7–10 dagar. Vi gir beskjed på SMS når kortet
                            blir sendt i posten.
                        </AccordionItem>
                        <AccordionItem heading="Hva er regionssperre?">
                            Regionsperre forhindrar at kortet ditt kan bli brukt
                            i ein del av verda du ikkje er i. Med regionsperre
                            reduserer du risikoen for at nokon misbruker
                            bankkortet ditt. I nett- og mobilbanken kan du
                            sperre kortet ditt for bruk i regionar du ikkje har
                            tenkt å reise til i næraste framtid.
                        </AccordionItem>
                        <AccordionItem heading="Bankkortet mitt fungerer ikke. Hva skal jeg gjøre?">
                            Det kan vere fleire årsaker til at kortet ditt ikkje
                            fungerer: Du må aktivere nytt kort før det kan
                            brukast til netthandel Har du fått nytt kort og skal
                            handla på nett? Då må du aktivere kortet først.
                            Dette gjer du enten med å bruke kortet i
                            butikkterminal og taste inn PIN, eller du kan
                            aktivere kortet i mobilbanken eller nettbanken under
                            menyvalet Kort. Kortet ditt kan vere slite eller
                            øydelagt Bestill nytt i mobil- eller nettbanken
                            eller kontakt oss.
                            <BulletList>
                                <BulletListItem>Bilforsikring</BulletListItem>
                                <BulletListItem>Reiseforsikring</BulletListItem>
                                <BulletListItem>Innboforsikring</BulletListItem>
                            </BulletList>
                        </AccordionItem>
                    </Accordion>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol className="mt-8">
                    <Heading3>Liknende artikler</Heading3>
                    <div className='flex flex-wrap gap-4'>
                        <ImageCard
                            imageSrc="https://design.sparebank1.no/static/familie-leker-ddcc1a0dacd2f6bafba6a9abb10e901c.jpg"
                            imageAltText="To jenter som går å snakker sammen"
                        >
                            {({ CardAction, Title, Subtext, Text }) => (
                                <>
                                    <CardAction href="/felles-forsikringer">
                                        <Title>Hva skjer med felles forsikringer i samlivsbrudd?</Title>
                                    </CardAction>
                                    <Subtext>En liten undertekst</Subtext>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. De nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Text>
                                </>
                            )}
                        </ImageCard>
                        <ImageCard
                            imageSrc="https://design.sparebank1.no/static/flytteesker-331cf364490c0dd0904f883fc6a46a8c.jpg"
                            imageAltText="To jenter som går å snakker sammen"
                        >
                            {({ CardAction, Title, Subtext, Text }) => (
                                <>
                                    <CardAction href="/felles-forsikringer">
                                        <Title>Slik sørger du for at barna får en trygg skolevei</Title>
                                    </CardAction>
                                    <Subtext>En liten undertekst</Subtext>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Text>
                                </>
                            )}
                        </ImageCard>
                        <ImageCard
                            imageSrc="https://design.sparebank1.no/static/snekker-fd27e182afce4ca0cfcb5297f4113cbb.jpg"
                            imageAltText="To jenter som går å snakker sammen"
                        >
                            {({ CardAction, Title, Subtext, Text }) => (
                                <>
                                    <CardAction href="/felles-forsikringer">
                                        <Title>Kjøpe og selge bolig</Title>
                                    </CardAction>
                                    <Subtext>En liten undertekst</Subtext>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </Text>
                                </>
                            )}
                        </ImageCard>
                    </div>
                </GridCol>
            </GridRow>

            {selectedTransaction && (
                <Modal
                    ref={modalRef}
                    onClose={closeModal}
                    ariaLabelledby={modalTitleId}
                >
                    <ModalBlock>
                        <Heading3 id={modalTitleId}>
                            Transaksjonsdetaljer
                        </Heading3>
                        <Paragraph>
                            <strong>Dato:</strong> {selectedTransaction.date}
                        </Paragraph>
                        <Paragraph>
                            <strong>Beløp:</strong>{' '}
                            <span
                                className={clsx(
                                    selectedTransaction.type === 'income' &&
                                    'text-ffe-green-700',
                                    selectedTransaction.type === 'expense' &&
                                    'text-ffe-red-700',
                                )}
                            >
                                {selectedTransaction.amount.toFixed(2)} kr
                            </span>
                        </Paragraph>
                        <Paragraph>
                            <strong>Type:</strong> {selectedTransaction.type}
                        </Paragraph>
                        {selectedTransaction.details && (
                            <Paragraph>
                                <strong>Detaljer:</strong>{' '}
                                {selectedTransaction.details}
                            </Paragraph>
                        )}
                    </ModalBlock>
                    <ModalBlock>
                        <SecondaryButton
                            onClick={() => modalRef.current?.close()}
                        >
                            Lukk
                        </SecondaryButton>
                    </ModalBlock>
                </Modal>
            )}
        </>
    );
};
