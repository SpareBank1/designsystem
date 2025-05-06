import React from 'react';
import { clsx } from 'clsx';
import { GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Heading2, Paragraph } from '@sb1/ffe-core-react';
import { Table } from '@sb1/ffe-tables-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { IconCard } from '@sb1/ffe-cards-react';
import { ArrowUpRight, ArrowDownLeft, Wallet } from 'lucide-react';

const transactions = [
    { date: '2024-02-21', description: 'REMA 1000 Oslo', amount: -245.50, type: 'expense' },
    { date: '2024-02-21', description: 'Lønn fra SpareBank 1', amount: 32000, type: 'income' },
    { date: '2024-02-20', description: 'Netflix', amount: -99, type: 'expense' },
    { date: '2024-02-19', description: 'Overføring til sparekonto', amount: -5000, type: 'transfer' },
];

export const AccountOverview = () => {
    return (
        <>
            <GridRow>
                <GridCol sm={12}>
                    <Heading1>Brukskonto</Heading1>
                    <Paragraph>Kontonummer: 1234 56 78910</Paragraph>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12} md={4}>
                    <IconCard icon={<Wallet size={24} />} title="Disponibel saldo">
                        <Heading2 className="mt-0">45 678,90 kr</Heading2>
                    </IconCard>
                </GridCol>
                <GridCol sm={12} md={4}>
                    <IconCard icon={<ArrowUpRight size={24} />} title="Utgående i dag">
                        <Heading2 className="text-ffe-red-700 mt-0">344,50 kr</Heading2>
                    </IconCard>
                </GridCol>
                <GridCol sm={12} md={4}>
                    <IconCard icon={<ArrowDownLeft size={24} />} title="Innkommende i dag">
                        <Heading2 className="text-ffe-green-700 mt-0">32 000,00 kr</Heading2>
                    </IconCard>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol>
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-4">
                            <Heading2>Siste transaksjoner</Heading2>
                            <SecondaryButton>Se alle transaksjoner</SecondaryButton>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Dato</th>
                                    <th>Beskrivelse</th>
                                    <th className="text-right">Beløp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((tx, i) => (
                                    <tr key={i}>
                                        <td>{tx.date}</td>
                                        <td>{tx.description}</td>
                                        <td 
                                            className={clsx(
                                                'text-right',
                                                tx.type === 'income' && 'text-ffe-green-700', 
                                                tx.type === 'expense' && 'text-ffe-red-700'
                                            )}
                                        >
                                            {tx.amount.toFixed(2)} kr
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </GridCol>
            </GridRow>
        </>
    );
};
