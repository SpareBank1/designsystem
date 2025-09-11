import { TertiaryButton } from '@sb1/ffe-buttons-react';
import { CardBase } from '@sb1/ffe-cards-react';
import { Heading1, Heading2 } from '@sb1/ffe-core-react';
import { Feedback } from '@sb1/ffe-feedback-react';
import { GridCol, GridRow } from '@sb1/ffe-grid-react';
import { DetailListCard, DetailListCardItem } from '@sb1/ffe-lists-react';
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';
import { Spinner } from '@sb1/ffe-spinner-react';
import {
    Table,
    TableBody,
    TableDataCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@sb1/ffe-tables-react';
import "./investmentDashboard.css";

const portfolioData = {
    totalValue: 125678.50,
    allocation: [
        { name: 'Aksjefond Global', value: 60000, percentage: 47.74 },
        { name: 'Rentefond Norge', value: 40000, percentage: 31.83 },
        { name: 'Eiendomsfond', value: 15678.50, percentage: 12.48 },
        { name: 'Kontanter', value: 10000, percentage: 7.95 },
        { name: 'Teknologifond', value: 8000, percentage: 6.37 },
        { name: 'Miljøfond', value: 7000, percentage: 5.57 },
        { name: 'Obligasjonsfond', value: 6500, percentage: 5.17 },
        { name: 'Indeksfond Europa', value: 5000, percentage: 3.98 },
        { name: 'Indeksfond USA', value: 4500, percentage: 3.58 },
        { name: 'Helsefond', value: 4000, percentage: 3.18 },
        { name: 'Utbyttefond', value: 3500, percentage: 2.78 },
        { name: 'Råvarefond', value: 3000, percentage: 2.38 },
        { name: 'Startfond', value: 2500, percentage: 1.99 },
        { name: 'Vekstfond', value: 2000, percentage: 1.59 },
    ],
    recentTrades: [
        { date: '2024-02-15', type: 'Kjøp', fund: 'Aksjefond Global', amount: 5000 },
        { date: '2024-02-10', type: 'Salg', fund: 'Rentefond Norge', amount: -2000 },
    ]
};

export const InvestmentDashboard = () => {
    const paginationControls = usePagination(portfolioData.allocation.length, 4);

    return (
        <div className='investment-dashboard'>
            <GridRow>
                <GridCol sm={12}>
                    <Heading1>Mine investeringer</Heading1>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12} md={6} lg={4}>
                    <CardBase>
                        <Heading2>Totalverdi</Heading2>
                        <div className="ffe-pre-text">{portfolioData.totalValue.toLocaleString('nb-NO', { style: 'currency', currency: 'NOK' })}</div>
                    </CardBase>
                </GridCol>
                <GridCol sm={12} md={6} lg={8}>
                    <CardBase>
                        <Heading2>Porteføljefordeling</Heading2>
                        <Spinner loadingText="Laster.. Hint: Den blir aldri ferdig" />
                    </CardBase>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol>
                    <DetailListCard className='mb-4'>
                        <DetailListCardItem label="Kontonavn" value="Daglig konto" />
                        <DetailListCardItem label="Kontotype" value="Brukskonto" />
                        <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
                        <DetailListCardItem label="Kontoeier" value="Ola Nordmann" />
                    </DetailListCard>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12}>
                    <CardBase>
                        <div className="flex justify-between items-center mb-2">
                            <Heading2>Porteføljedetaljer</Heading2>
                            <TertiaryButton>Se alle beholdninger</TertiaryButton>
                        </div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell scope="col">Investering</TableHeaderCell>
                                    <TableHeaderCell scope="col" className="text-right">Verdi (NOK)</TableHeaderCell>
                                    <TableHeaderCell scope="col" className="text-right">Andel (%)</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {portfolioData.allocation
                                    .slice(paginationControls.pageStart, paginationControls.pageStart + paginationControls.currentPageSize)
                                    .map((item, index) => (
                                        <TableRow key={index}>
                                            <TableDataCell columnHeader="Investering">{item.name}</TableDataCell>
                                            <TableDataCell columnHeader="Verdi (NOK)" className="text-right">{item.value.toLocaleString('nb-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableDataCell>
                                            <TableDataCell columnHeader="Andel (%)" className="text-right">{item.percentage.toFixed(2)}</TableDataCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                        <Pagination
                            className='mt-4'
                            ariaLabel="paginasjon"
                            paginationControls={paginationControls}
                            rowsPerPageOptions={[4, 8, 12]}
                        />
                    </CardBase>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12}>
                    <CardBase>
                        <div className="flex justify-between items-center mb-2">
                            <Heading2>Siste handler</Heading2>
                            <TertiaryButton>Se all historikk</TertiaryButton>
                        </div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell scope="col">Dato</TableHeaderCell>
                                    <TableHeaderCell scope="col">Type</TableHeaderCell>
                                    <TableHeaderCell scope="col">Fond</TableHeaderCell>
                                    <TableHeaderCell scope="col" className="text-right">Beløp (NOK)</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {portfolioData.recentTrades.map((trade, index) => (
                                    <TableRow key={index}>
                                        <TableDataCell columnHeader="Dato">{trade.date}</TableDataCell>
                                        <TableDataCell columnHeader="Type">{trade.type}</TableDataCell>
                                        <TableDataCell columnHeader="Fond">{trade.fund}</TableDataCell>
                                        <TableDataCell columnHeader="Beløp (NOK)" className="text-right">{trade.amount.toLocaleString('nb-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableDataCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBase>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol>
                    <Feedback onFeedbackSend={() => console.log("Sent")} onThumbClick={() => console.log("thumb hurra")} />
                </GridCol>
            </GridRow>
        </div>
    );
};
