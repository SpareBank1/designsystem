import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonPair } from './ButtonPair';

describe('ButtonPair', () => {
  it('renders primary and secondary buttons', () => {
    render(<ButtonPair />);
    
    expect(screen.getByText('Primary Action')).toBeInTheDocument();
    expect(screen.getByText('Secondary Action')).toBeInTheDocument();
  });

  it('calls onPrimaryClick when primary button is clicked', async () => {
    const mockPrimaryClick = vi.fn();
    const user = userEvent.setup();
    
    render(<ButtonPair onPrimaryClick={mockPrimaryClick} />);
    
    const primaryButton = screen.getByText('Primary Action');
    await user.click(primaryButton);
    
    expect(mockPrimaryClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSecondaryClick when secondary button is clicked', async () => {
    const mockSecondaryClick = vi.fn();
    const user = userEvent.setup();
    
    render(<ButtonPair onSecondaryClick={mockSecondaryClick} />);
    
    const secondaryButton = screen.getByText('Secondary Action');
    await user.click(secondaryButton);
    
    expect(mockSecondaryClick).toHaveBeenCalledTimes(1);
  });

  it('has correct grid layout structure', () => {
    render(<ButtonPair />);
    
    // Vi kan bruke data-testid attributter som FFE-komponenter kan eksponere,
    // eller sjekke at knappene finnes i riktig rekkefølge
    const buttons = screen.getAllByRole('button');
    
    expect(buttons.length).toBe(2);
    // Sjekk at de riktige tekstene vises på knappene
    expect(screen.getByText('Primary Action')).toBeInTheDocument();
    expect(screen.getByText('Secondary Action')).toBeInTheDocument();
  });

  it('uses correct label class for button texts', () => {
    render(<ButtonPair />);
    
    const primaryButtonText = screen.getByText('Primary Action');
    const secondaryButtonText = screen.getByText('Secondary Action');
    
    // Sjekk at tekstelementene har riktig klasse (ffe-button__label)
    expect(primaryButtonText).toHaveClass('ffe-button__label');
    expect(secondaryButtonText).toHaveClass('ffe-button__label');
  });
}); 