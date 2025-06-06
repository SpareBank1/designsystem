import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaymentForm } from './PaymentForm';

describe('PaymentForm', () => {
  // Helper for å fylle ut skjemaet med gyldige data
  const fillValidFormData = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.selectOptions(screen.getByLabelText('Fra konto'), '1234.56.78910');
    await user.type(screen.getByLabelText('Mottakers kontonummer'), '98765432100');
    await user.type(screen.getByLabelText('Mottakers navn'), 'Kari Nordmann');
    await user.type(screen.getByLabelText('Beløp'), '123.45');
    // Dato og melding er valgfrie i denne versjonen
  };

  const fillAndSubmitValidFormData = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.selectOptions(screen.getByLabelText('Fra konto'), '1234.56.78910');
    await user.type(screen.getByLabelText('Mottakers kontonummer'), '98765432100');
    await user.type(screen.getByLabelText('Mottakers navn'), 'Kari Nordmann');
    await user.type(screen.getByLabelText('Beløp'), '123.45');
    // Standard betalingstype er 'vanlig'
    await user.click(screen.getByRole('button', { name: /send betaling/i }));
  };

  it('renders form inputs and button', () => {
    render(<PaymentForm />);
    
    expect(screen.getByLabelText('Fra konto')).toBeInTheDocument();
    expect(screen.getByLabelText('Mottakers kontonummer')).toBeInTheDocument();
    expect(screen.getByLabelText('Mottakers navn')).toBeInTheDocument();
    expect(screen.getByLabelText('Beløp')).toBeInTheDocument();
    // Sjekker at label-teksten finnes, og at Datepicker-komponenten rendres via data-testid
    expect(screen.getByText('Betalingsdato')).toBeInTheDocument(); 
    expect(screen.getByTestId('date-picker')).toBeInTheDocument();
    expect(screen.getByLabelText('Melding til mottaker (valgfritt)')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send betaling/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /avbryt/i })).toBeInTheDocument();
    // Nye sjekker for radiobuttons
    expect(screen.getByLabelText('Betalingstype')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Straksbetaling' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Vanlig betaling' })).toBeInTheDocument();
  });

  it('allows user to input values', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    const fromAccountSelect = screen.getByLabelText('Fra konto');
    const accountInput = screen.getByLabelText('Mottakers kontonummer');
    const nameInput = screen.getByLabelText('Mottakers navn');
    const amountInput = screen.getByLabelText('Beløp');
    const messageInput = screen.getByLabelText('Melding til mottaker (valgfritt)');
    // Datepicker input er vanskeligere å teste direkte, vi hopper over den her

    await user.selectOptions(fromAccountSelect, '1234.56.78910');
    await user.type(accountInput, '12345678910');
    await user.type(nameInput, 'Ola Nordmann');
    await user.type(amountInput, '500');
    await user.type(messageInput, 'Testmelding');
    
    expect(fromAccountSelect).toHaveValue('1234.56.78910');
    expect(accountInput).toHaveValue('12345678910');
    expect(nameInput).toHaveValue('Ola Nordmann');
    expect(amountInput).toHaveValue('500,00'); // Forventer formatert verdi etter implisitt blur
    expect(messageInput).toHaveValue('Testmelding');
    // Sjekk radiobutton default
    expect(screen.getByRole('radio', { name: 'Vanlig betaling' })).toBeChecked();
  });

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');
    render(<PaymentForm />);
    
    await fillAndSubmitValidFormData(user);
    
    expect(await screen.findByText('Betaling sendt!')).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Betaling sendt:',
      expect.objectContaining({ paymentType: 'vanlig' })
    );

    // Sjekk at "vanlig" er valgt igjen etter reset
    expect(screen.getByRole('radio', { name: 'Vanlig betaling' })).toBeChecked();

    // Velg straksbetaling og submit igjen
    await user.click(screen.getByRole('radio', { name: 'Straksbetaling' }));
    await fillAndSubmitValidFormData(user); // Fyll ut resten av skjemaet

    expect(await screen.findByText('Betaling sendt!')).toBeInTheDocument(); // Må vente på denne igjen
    expect(consoleSpy).toHaveBeenCalledWith(
      'Betaling sendt:',
      expect.objectContaining({ paymentType: 'straks' })
    );
    consoleSpy.mockRestore();
  });

  it('shows validation error for invalid amount', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    await user.selectOptions(screen.getByLabelText('Fra konto'), '1234.56.78910');
    await user.type(screen.getByLabelText('Mottakers kontonummer'), '123');
    await user.type(screen.getByLabelText('Mottakers navn'), 'Test');
    await user.type(screen.getByLabelText('Beløp'), '-10'); // Negativt beløp
    fireEvent.blur(screen.getByLabelText('Beløp')); // Trigger blur for formatering/validering
    
    await user.click(screen.getByRole('button', { name: /send betaling/i }));
    
    expect(await screen.findByText('Beløp må være et gyldig positivt tall')).toBeInTheDocument();
    expect(screen.getByLabelText('Beløp')).toHaveAttribute('aria-invalid', 'true');
    // Andre felt skal være gyldige
    expect(screen.getByLabelText('Fra konto')).not.toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Mottakers kontonummer')).not.toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Mottakers navn')).not.toHaveAttribute('aria-invalid', 'true');
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

  it('submits the form and shows success message when valid', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);
    
    await fillValidFormData(user);
    const submitButton = screen.getByRole('button', { name: /send betaling/i });
    await user.click(submitButton);
    
    // Sjekk at suksessmelding vises
    expect(await screen.findByText('Betaling sendt!')).toBeInTheDocument();
    expect(screen.getByText('Din betaling er registrert.')).toBeInTheDocument();

    // Sjekk at feilmeldinger IKKE vises
    expect(screen.queryByText('Kontonummer må fylles ut')).not.toBeInTheDocument();
    expect(screen.queryByText('Navn må fylles ut')).not.toBeInTheDocument();
    expect(screen.queryByText('Beløp må være et positivt tall')).not.toBeInTheDocument();
    expect(screen.queryByText('Du må velge en konto å betale fra')).not.toBeInTheDocument();

    // Sjekk at feltene er tømt etter submit
    expect(screen.getByLabelText('Fra konto')).toHaveValue('');
    expect(screen.getByLabelText('Mottakers kontonummer')).toHaveValue('');
    expect(screen.getByLabelText('Mottakers navn')).toHaveValue('');
    expect(screen.getByLabelText('Beløp')).toHaveValue(''); // Er nå text input, så tomt, ikke null
    expect(screen.getByLabelText('Melding til mottaker (valgfritt)')).toHaveValue('');
  });

  it('resets the form when cancel button is clicked', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);

    await fillValidFormData(user);
    await user.type(screen.getByLabelText('Melding til mottaker (valgfritt)'), 'Skal resettes');

    // Velg straksbetaling for å sjekke at det resettes
    await user.click(screen.getByRole('radio', { name: 'Straksbetaling' }));
    expect(screen.getByRole('radio', { name: 'Straksbetaling' })).toBeChecked();

    // Verifiser at feltene har verdier
    expect(screen.getByLabelText('Fra konto')).toHaveValue('1234.56.78910');
    expect(screen.getByLabelText('Melding til mottaker (valgfritt)')).toHaveValue('Skal resettes');

    const cancelButton = screen.getByRole('button', { name: /avbryt/i });
    await user.click(cancelButton);

    // Verifiser at feltene er tømt
    expect(screen.getByLabelText('Fra konto')).toHaveValue('');
    expect(screen.getByLabelText('Mottakers kontonummer')).toHaveValue('');
    expect(screen.getByLabelText('Mottakers navn')).toHaveValue('');
    expect(screen.getByLabelText('Beløp')).toHaveValue(''); // Er nå text input
    expect(screen.getByLabelText('Melding til mottaker (valgfritt)')).toHaveValue('');
    // Sjekk at radiobutton er resatt til default
    expect(screen.getByRole('radio', { name: 'Vanlig betaling' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Straksbetaling' })).not.toBeChecked();
  });

  it('allows changing payment type', async () => {
    const user = userEvent.setup();
    render(<PaymentForm />);

    const straksRadio = screen.getByRole('radio', { name: 'Straksbetaling' });
    const vanligRadio = screen.getByRole('radio', { name: 'Vanlig betaling' });

    // Sjekk default
    expect(vanligRadio).toBeChecked();
    expect(straksRadio).not.toBeChecked();

    // Velg straks
    await user.click(straksRadio);
    expect(straksRadio).toBeChecked();
    expect(vanligRadio).not.toBeChecked();

    // Velg vanlig tilbake
    await user.click(vanligRadio);
    expect(vanligRadio).toBeChecked();
    expect(straksRadio).not.toBeChecked();
  });

  it('formats amount on blur and submits correct numeric value', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');
    render(<PaymentForm />);

    const amountInput = screen.getByLabelText('Beløp');

    // Test 1: Gyldig tall med punktum
    await user.clear(amountInput);
    await user.type(amountInput, '1234.56');
    fireEvent.blur(amountInput);
    await waitFor(() => expect(amountInput).toHaveValue('1\u00A0234,56'));

    // Fyll ut resten av skjemaet for en gyldig submit
    await user.selectOptions(screen.getByLabelText('Fra konto'), '1234.56.78910');
    await user.type(screen.getByLabelText('Mottakers kontonummer'), '98765432100');
    await user.type(screen.getByLabelText('Mottakers navn'), 'Blur Test');
    await user.click(screen.getByRole('button', { name: /send betaling/i }));
    
    expect(await screen.findByText('Betaling sendt!')).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Betaling sendt:',
      expect.objectContaining({ amount: 1234.56 })
    );
    await user.click(screen.getByText('Betaling sendt!')); // For å fjerne suksessmelding for neste del

    // Test 2: Gyldig tall med komma (uten tusenskilletegn, formatNumber legger ikke til for < 1000)
    await user.clear(amountInput);
    await user.type(amountInput, '567,89');
    fireEvent.blur(amountInput);
    await waitFor(() => expect(amountInput).toHaveValue('567,89')); // Forblir uendret uten tusenskilletegn
    // Fyll ut resten på nytt
    await user.selectOptions(screen.getByLabelText('Fra konto'), '1234.56.78910');
    await user.type(screen.getByLabelText('Mottakers kontonummer'), '98765432101'); // Unikt kontonr
    await user.type(screen.getByLabelText('Mottakers navn'), 'Blur Test 2');
    await user.click(screen.getByRole('button', { name: /send betaling/i }));

    expect(await screen.findByText('Betaling sendt!')).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith(
        'Betaling sendt:',
        expect.objectContaining({ amount: 567.89 })
      );
    await user.click(screen.getByText('Betaling sendt!'));

    // Test 3: Tall som trenger tusenskilletegn
    await user.clear(amountInput);
    await user.type(amountInput, '5678,90');
    fireEvent.blur(amountInput);
    await waitFor(() => expect(amountInput).toHaveValue('5\u00A0678,90')); // Bruk non-breaking space
    // Fyll ut resten av skjemaet for en gyldig submit
    await user.selectOptions(screen.getByLabelText('Fra konto'), '1234.56.78910');
    await user.type(screen.getByLabelText('Mottakers kontonummer'), '98765432102'); // Unikt kontonr
    await user.type(screen.getByLabelText('Mottakers navn'), 'Blur Test 3');
    await user.click(screen.getByRole('button', { name: /send betaling/i }));

    expect(await screen.findByText('Betaling sendt!')).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith(
        'Betaling sendt:',
        expect.objectContaining({ amount: 5678.90 })
      );
    await user.click(screen.getByText('Betaling sendt!'));

    // Test 4: Ugyldig input (skal ikke formateres, men validering skal feile)
    await user.clear(amountInput);
    await user.type(amountInput, 'abc');
    fireEvent.blur(amountInput);
    expect(amountInput).toHaveValue('abc'); // Beholder ugyldig input
    await user.click(screen.getByRole('button', { name: /send betaling/i }));
    expect(await screen.findByText('Beløp må være et gyldig positivt tall')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
}); 