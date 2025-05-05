import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
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

  it('submits the form and shows an alert', async () => {
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
    
    alertMock.mockRestore(); // Restore original alert function
  });
}); 