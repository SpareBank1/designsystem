import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { AccountOverview } from './AccountOverview';
import { toHaveNoViolations } from 'jest-axe';

// Utvid jest med tilgjengelighetsjekker
expect.extend(toHaveNoViolations);

describe('AccountOverview', () => {
  // Mock for useId for å unngå unike IDer i snapshots og queries
  vi.mock('react', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react')>();
    let idCounter = 0;
    return {
      ...actual,
      useId: () => `mocked-id-${idCounter++}`,
    };
  });

  it('renders the account title and number correctly', () => {
    render(<AccountOverview />);
    expect(screen.getByRole('heading', { name: 'Brukskonto' })).toBeInTheDocument();
    expect(screen.getByText('Kontonummer: 1234 56 78910')).toBeInTheDocument();
  });

  it('displays the correct account balance', () => {
    render(<AccountOverview />);
    // Antar at saldo vises innenfor en heading i IconCard
    const balanceCard = screen.getByTitle('Disponibel saldo');
    expect(within(balanceCard).getByRole('heading', { name: /45 678,90 kr/i })).toBeInTheDocument();
  });

  it('displays outgoing and incoming amounts', () => {
    render(<AccountOverview />);
    const outgoingCard = screen.getByTitle('Utgående i dag');
    expect(within(outgoingCard).getByRole('heading', { name: /344,50 kr/i })).toBeInTheDocument();

    const incomingCard = screen.getByTitle('Innkommende i dag');
    expect(within(incomingCard).getByRole('heading', { name: /32 000,00 kr/i })).toBeInTheDocument();
  });

  it('displays transactions in a table using FFE components', () => {
    render(<AccountOverview />);

    expect(screen.getByRole('heading', { name: 'Siste transaksjoner' })).toBeInTheDocument();

    const table = screen.getByRole('table');
    // Sjekker at kolonneoverskriftene finnes, noe som impliserer at thead er der.
    expect(within(table).getByRole('columnheader', { name: 'Dato' })).toBeInTheDocument();
    expect(within(table).getByRole('columnheader', { name: 'Beskrivelse' })).toBeInTheDocument();
    expect(within(table).getByRole('columnheader', { name: 'Beløp' })).toBeInTheDocument();

    // Sjekk at transaksjonsrader finnes
    expect(screen.getByRole('row', { name: /REMA 1000 Oslo/i })).toBeInTheDocument();
    expect(screen.getByRole('row', { name: /Lønn fra SpareBank 1/i })).toBeInTheDocument();
  });

  it('shows correct styling for income and expenses', () => {
    render(<AccountOverview />);

    const remaRow = screen.getByRole('row', { name: /REMA 1000 Oslo/i });
    const lonnRow = screen.getByRole('row', { name: /Lønn fra SpareBank 1/i });

    if (remaRow && lonnRow) {
      const expenseCellText = within(remaRow).getByText(/-245\.50 kr/i);
      const incomeCellText = within(lonnRow).getByText(/32000\.00 kr/i);

      const expenseCellElement = expenseCellText.closest('td');
      const incomeCellElement = incomeCellText.closest('td');

      expect(expenseCellElement).toHaveClass('text-ffe-red-700');
      expect(incomeCellElement).toHaveClass('text-ffe-green-700');
    } else {
      throw new Error('Could not find transaction rows for styling test');
    }
  });

  it('has a button to view all transactions', () => {
    render(<AccountOverview />);
    expect(screen.getByRole('button', { name: 'Se alle transaksjoner' })).toBeInTheDocument();
  });
});
