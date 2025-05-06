import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaymentForm } from './PaymentForm';

describe('PaymentForm', () => {
  it('renders form inputs and button', () => {
    render(<PaymentForm />);
    
    expect(screen.getByLabelText('Mottakers kontonummer')).toBeInTheDocument();
    expect(screen.getByLabelText('Mottakers navn')).toBeInTheDocument();
    expect(screen.getByLabelText('Beløp')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send betaling/i })).toBeInTheDocument();
  });

  it('allows user to input values', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    const accountInput = screen.getByLabelText('Mottakers kontonummer');
    const nameInput = screen.getByLabelText('Mottakers navn');
    const amountInput = screen.getByLabelText('Beløp');
    
    await user.type(accountInput, '12345678910');
    await user.type(nameInput, 'Ola Nordmann');
    await user.type(amountInput, '500');
    
    expect(accountInput).toHaveValue('12345678910');
    expect(nameInput).toHaveValue('Ola Nordmann');
    expect(amountInput).toHaveValue(500);
  });

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    const submitButton = screen.getByRole('button', { name: /send betaling/i });
    await user.click(submitButton);
    
    expect(await screen.findByText('Kontonummer må fylles ut')).toBeInTheDocument();
    expect(await screen.findByText('Navn må fylles ut')).toBeInTheDocument();
    expect(await screen.findByText('Beløp må være et positivt tall')).toBeInTheDocument();

    // Sjekk aria-invalid
    expect(screen.getByLabelText('Mottakers kontonummer')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Mottakers navn')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Beløp')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows validation error for invalid amount', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    await user.type(screen.getByLabelText('Mottakers kontonummer'), '123');
    await user.type(screen.getByLabelText('Mottakers navn'), 'Test');
    await user.type(screen.getByLabelText('Beløp'), '-10'); // Negativt beløp
    
    await user.click(screen.getByRole('button', { name: /send betaling/i }));
    
    expect(await screen.findByText('Beløp må være et positivt tall')).toBeInTheDocument();
    expect(screen.getByLabelText('Beløp')).toHaveAttribute('aria-invalid', 'true');
  });

  it('clears validation errors when input is corrected', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    const submitButton = screen.getByRole('button', { name: /send betaling/i });
    await user.click(submitButton); // Første submit for å få feilmeldinger
    
    expect(await screen.findByText('Kontonummer må fylles ut')).toBeInTheDocument();
    
    const accountInput = screen.getByLabelText('Mottakers kontonummer');
    await user.type(accountInput, '12345678910');
    
    // Vent på at re-validering skjer og feilmeldingen forsvinner
    await waitFor(() => {
      expect(screen.queryByText('Kontonummer må fylles ut')).not.toBeInTheDocument();
    });
    expect(accountInput).not.toHaveAttribute('aria-invalid', 'true');
  });

  it('submits the form and shows an alert when valid', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    // Mock window.alert
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    
    const accountInput = screen.getByLabelText('Mottakers kontonummer');
    const nameInput = screen.getByLabelText('Mottakers navn');
    const amountInput = screen.getByLabelText('Beløp');
    const submitButton = screen.getByRole('button', { name: /send betaling/i });
    
    await user.type(accountInput, '98765432100');
    await user.type(nameInput, 'Kari Nordmann');
    await user.type(amountInput, '123.45');
    await user.click(submitButton);
    
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith(
      'Betaling sendt:\nKonto: 98765432100\nNavn: Kari Nordmann\nBeløp: 123.45'
    );

    // Sjekk at feltene er tømt etter submit
    expect(accountInput).toHaveValue('');
    expect(nameInput).toHaveValue('');
    expect(amountInput).toHaveValue(null); // number input blir null
    
    alertMock.mockRestore(); // Restore original alert function
  });
}); 