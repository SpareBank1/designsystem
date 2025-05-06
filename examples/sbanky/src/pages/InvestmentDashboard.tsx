import React from 'react';
import { GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Heading2 } from '@sb1/ffe-core-react';
import { ChartDonut } from '@sb1/ffe-chart-donut-react';
import { CardBase } from '@sb1/ffe-cards-react';
import { Table } from '@sb1/ffe-tables-react';
import { TertiaryButton } from '@sb1/ffe-buttons-react';

const portfolioData = {
    totalValue: 125678.50,
    allocation: [
        { name: 'Aksjefond Global', value: 60000, percentage: 47.74 },
        { name: 'Rentefond Norge', value: 40000, percentage: 31.83 },
        { name: 'Eiendomsfond', value: 15678.50, percentage: 12.48 },
        { name: 'Kontanter', value: 10000, percentage: 7.95 },
    ],
    recentTrades: [
        { date: '2024-02-15', type: 'Kjøp', fund: 'Aksjefond Global', amount: 5000 },
        { date: '2024-02-10', type: 'Salg', fund: 'Rentefond Norge', amount: -2000 },
    ]
};

export const InvestmentDashboard = () => {
    return (
        <>
            <GridRow>
                <GridCol sm={12}>
                    <Heading1>Mine investeringer</Heading1>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12} md={6} lg={4}>
                    <CardBase>
                        <Heading2>Totalverdi</Heading2>
                        <div className="ffe-h1 mt-1">{portfolioData.totalValue.toLocaleString('nb-NO', { style: 'currency', currency: 'NOK' })}</div>
                    </CardBase>
                </GridCol>
                <GridCol sm={12} md={6} lg={8}>
                    <CardBase>
                        <Heading2>Porteføljefordeling</Heading2>
                        <ChartDonut 
                            data={portfolioData.allocation}
                            labelKey="name"
                            valueKey="percentage"
                            unit="%"
                            showSum={false}
                            centerLabel="Fordeling"
                            className="mt-2"
                            height={200}
                        />
                    </CardBase>
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
                            <thead>
                                <tr>
                                    <th>Investering</th>
                                    <th className="text-right">Verdi (NOK)</th>
                                    <th className="text-right">Andel (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {portfolioData.allocation.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td className="text-right">{item.value.toLocaleString('nb-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                        <td className="text-right">{item.percentage.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
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
                             <thead>
                                 <tr>
                                     <th>Dato</th>
                                     <th>Type</th>
                                     <th>Fond</th>
                                     <th className="text-right">Beløp (NOK)</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {portfolioData.recentTrades.map((trade, index) => (
                                     <tr key={index}>
                                         <td>{trade.date}</td>
                                         <td>{trade.type}</td>
                                         <td>{trade.fund}</td>
                                         <td className="text-right">{trade.amount.toLocaleString('nb-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </Table>
                     </CardBase>
                 </GridCol>
             </GridRow>
        </>
    );
};
