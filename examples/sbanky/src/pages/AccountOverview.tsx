import { useState, useRef, useId } from 'react';
import { clsx } from 'clsx';
import { GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableDataCell,
} from '@sb1/ffe-tables-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { IconCard } from '@sb1/ffe-cards-react';
import { Modal, ModalBlock, ModalHandle } from '@sb1/ffe-modals-react';
import { Heading3 } from '@sb1/ffe-core-react';
import { ArrowUpRight, ArrowDownLeft, Wallet } from 'lucide-react';

interface Transaction {
    date: string;
    description: string;
    amount: number;
    type: 'income' | 'expense' | 'transfer';
    details?: string; // Ekstra detaljer for modalen
}

const transactions: Transaction[] = [
    { date: '2024-02-21', description: 'REMA 1000 Oslo', amount: -245.50, type: 'expense', details: 'Dagligvarer kjøpt hos REMA 1000, Storgata.' },
    { date: '2024-02-21', description: 'Lønn fra SpareBank 1', amount: 32000, type: 'income', details: 'Månedlig lønnsutbetaling.' },
    { date: '2024-02-20', description: 'Netflix', amount: -99, type: 'expense', details: 'Månedsabonnement for Netflix streamingtjeneste.' },
    { date: '2024-02-19', description: 'Overføring til sparekonto', amount: -5000, type: 'transfer', details: 'Automatisk månedlig overføring.' },
];

export const AccountOverview = () => {
    const [_, setIsModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
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
                <GridCol sm={12}>
                    <Heading2>Brukskonto</Heading2>
                    <Paragraph>Kontonummer: 1234 56 78910</Paragraph>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12} md={4}>
                    <IconCard icon={<Wallet size={24} />} title="Disponibel saldo">
                        <Heading3 className="mt-0">45 678,90 kr</Heading3>
                    </IconCard>
                </GridCol>
                <GridCol sm={12} md={4}>
                    <IconCard icon={<ArrowUpRight size={24} />} title="Utgående i dag">
                        <Heading3 className="mt-0">344,50 kr</Heading3>
                    </IconCard>
                </GridCol>
                <GridCol sm={12} md={4}>
                    <IconCard icon={<ArrowDownLeft size={24} />} title="Innkommende i dag">
                        <Heading3 className="mt-0">32 000,00 kr</Heading3>
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
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell scope="col">Dato</TableHeaderCell>
                                    <TableHeaderCell scope="col">Beskrivelse</TableHeaderCell>
                                    <TableHeaderCell scope="col" className="text-right">Beløp</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((tx, i) => (
                                    <TableRow
                                        key={i}
                                        onClick={() => handleTransactionClick(tx)}
                                        className="cursor-pointer hover:bg-ffe-blue-azure-light"
                                    >
                                        <TableDataCell columnHeader="Dato">{tx.date}</TableDataCell>
                                        <TableDataCell columnHeader="Beskrivelse">{tx.description}</TableDataCell>
                                        <TableDataCell
                                            columnHeader="Beløp"
                                            className={clsx(
                                                'text-right',
                                                tx.type === 'income' && 'text-ffe-green-700',
                                                tx.type === 'expense' && 'text-ffe-red-700'
                                            )}
                                        >
                                            {tx.amount.toFixed(2)} kr
                                        </TableDataCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
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
                        <Heading3 id={modalTitleId}>Transaksjonsdetaljer</Heading3>
                        <Paragraph><strong>Dato:</strong> {selectedTransaction.date}</Paragraph>
                        <Paragraph><strong>Beløp:</strong> <span className={clsx(
                                selectedTransaction.type === 'income' && 'text-ffe-green-700',
                                selectedTransaction.type === 'expense' && 'text-ffe-red-700'
                            )}>{selectedTransaction.amount.toFixed(2)} kr</span></Paragraph>
                        <Paragraph><strong>Type:</strong> {selectedTransaction.type}</Paragraph>
                        {selectedTransaction.details && <Paragraph><strong>Detaljer:</strong> {selectedTransaction.details}</Paragraph>}
                    </ModalBlock>
                    <ModalBlock>
                        <SecondaryButton onClick={() => modalRef.current?.close()}>Lukk</SecondaryButton>
                    </ModalBlock>
                </Modal>
            )}
        </>
    );
};
