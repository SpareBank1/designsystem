import { ActionButton, BackButton, ButtonGroup, ExpandButton, InlineExpandButton, SecondaryButton, TaskButton, TertiaryButton } from '@sb1/ffe-buttons-react';
import { ChartDonut } from '@sb1/ffe-chart-donut-react';
import { Collapse } from '@sb1/ffe-collapse-react';
import { Heading2, Heading3, Paragraph, SmallText } from '@sb1/ffe-core-react';
import { GridCol, GridRow } from '@sb1/ffe-grid-react';
import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';
import React, { useId, useState } from 'react';
import plusIcon from '@sb1/ffe-icons/icons/open/300/md/add.svg';
import { Icon } from '@sb1/ffe-icons-react';
import { Chip, ChipRemovable, ChipSelectable } from '@sb1/ffe-chips-react';
import LoanCard from '@/components/LoanCard';

const categoriesList = ['Feriebolig', 'Hytte', 'Yatch', 'Bil', 'Motor', 'Fjordcruise'];

const SavingDashboard: React.FC = () => {
    const [percentage, setPercentage] = React.useState(Math.random() * 100);
    const collapseId = useId();
    const collapseId2 = useId();
    const [isExpanded, setExpanded] = useState(false);
    const [isExpanded2, setExpanded2] = useState(false);
    const [categories, setCategories] = useState<string[]>([categoriesList[0], categoriesList[1], categoriesList[2]]);
    const [selectedCategory, setSelectedCategory] = useState<boolean>(false);
    return (
        <GridRow>
            <GridCol className="mb-4">
                <BackButton className="mt-2">Tilbake</BackButton>
            </GridCol>
            <GridCol md={6}>
                <Heading2 noMargin={true}>Sparing</Heading2>
                <SmallText>Demonstrasjon av knapper, chart donut, collapse, paragraph og lister</SmallText>
                <ChartDonut
                    percentage={percentage}
                    name="Sparing i livet"
                    firstLabel="Så langt"
                    lastLabel="Gjenstående" />
                <ButtonGroup>
                    <ActionButton onClick={() => setPercentage(Math.random() * 100)}>
                        Endre spareverdi
                    </ActionButton>
                    <SecondaryButton onClick={() => setPercentage(100)}>
                        Sett til 100%
                    </SecondaryButton>
                    <TertiaryButton onClick={() => setPercentage(0)}>
                        Nullstill
                    </TertiaryButton>
                </ButtonGroup>
            </GridCol>
            <GridCol md={6}>
                <LoanCard
                    amount={
                        (percentage / 100) * 3000000 // This gives you the actual amount based on percentage
                    }
                    maxAmount={3000000}
                />
            </GridCol>
            <GridCol>
                <Heading2 noMargin={true}>Sparingsmål</Heading2>
                <BulletList>
                    <BulletListItem>Feriebolig</BulletListItem>
                    <BulletListItem>Hytte</BulletListItem>
                    <BulletListItem>Yatch</BulletListItem>
                </BulletList>
                <Collapse id={collapseId2} isOpen={isExpanded2} role="region">
                    <BulletList>
                        <BulletListItem>Bil</BulletListItem>
                        <BulletListItem>Motor</BulletListItem>
                        <BulletListItem>Fjordcruise</BulletListItem>
                    </BulletList>
                </Collapse>
                <ExpandButton onClick={() => setExpanded2(!isExpanded2)} isExpanded={isExpanded2} aria-controls={collapseId2}>
                    Vis mer
                </ExpandButton>
            </GridCol>
            <GridCol>
                <Heading2 noMargin={true}>Samtykke</Heading2>
                <Paragraph>
                    Jeg samtykker til at selskapene i SpareBank 1 deler og
                    benytter opplysningene om meg, slik at jeg kan få bedre og
                    relevante tilbud.
                    <InlineExpandButton aria-controls={collapseId} aria-expanded={isExpanded} isExpanded={isExpanded} onClick={() => setExpanded(!isExpanded)}>
                        {isExpanded ? 'Vis mindre' : 'Vis mer'}
                    </InlineExpandButton>
                </Paragraph>

                <Collapse id={collapseId} isOpen={isExpanded} role="region">
                    <div>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                    </div>
                </Collapse>
            </GridCol>
            <GridCol>
                <Heading2 noMargin={true}>Kateogrier</Heading2>
                <Heading3>Small</Heading3>
                <div className="flex gap-1">
                    <Chip size="sm" className="mb-2">Pensjon</Chip>
                    <ChipSelectable
                        size="sm"
                        className="mb-2"
                        isSelected={selectedCategory}
                        onClick={() => setSelectedCategory(!selectedCategory)}
                    >
                        PC
                    </ChipSelectable>
                    {categories.map((category, index) => (
                        <ChipRemovable
                            size="sm"
                            className="mb-2"
                            key={index}
                            onClick={() => {
                                setCategories(categories.filter((_, i) => i !== index))
                            }}>
                            {category}
                        </ChipRemovable>))}
                </div>
                <Heading3>Medium</Heading3>
                <div className="flex gap-1">
                    <Chip size="md" className="mb-2">Pensjon</Chip>
                    <ChipSelectable
                        size="md"
                        className="mb-2"
                        isSelected={selectedCategory}
                        onClick={() => setSelectedCategory(!selectedCategory)}
                    >
                        PC
                    </ChipSelectable>
                    {categories.map((category, index) => (
                        <ChipRemovable
                            size="md"
                            className="mb-2"
                            key={index}
                            onClick={() => {
                                setCategories(categories.filter((_, i) => i !== index))
                            }}>
                            {category}
                        </ChipRemovable>))}
                </div>
                <Heading3>Large</Heading3>
                <div className="flex gap-1">
                    <Chip size="lg" className="mb-2">Pensjon</Chip>
                    <ChipSelectable
                        size="lg"
                        className="mb-2"
                        isSelected={selectedCategory}
                        onClick={() => setSelectedCategory(!selectedCategory)}
                    >
                        PC
                    </ChipSelectable>
                    {categories.map((category, index) => (
                        <ChipRemovable
                            size="lg"
                            className="mb-2"
                            key={index}
                            onClick={() => {
                                setCategories(categories.filter((_, i) => i !== index))
                            }}>
                            {category}
                        </ChipRemovable>))}
                </div>

                <TaskButton
                    icon={<Icon fileUrl={plusIcon} />}
                    onClick={() => {
                        const nextCategory = categoriesList.find(cat => !categories.includes(cat));
                        if (nextCategory) {
                            setCategories([...categories, nextCategory]);
                        }
                    }}
                >
                    Legg til sparingsmål
                </TaskButton>
            </GridCol>
        </GridRow>
    );
};

export default SavingDashboard;