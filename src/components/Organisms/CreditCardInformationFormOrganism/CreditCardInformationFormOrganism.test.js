import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreditCardInformationFormOrganism from './CreditCardInformationFormOrganism';

describe('<CreditCardInformationFormOrganism />', () => {
  test('it should mount', () => {
    render(<CreditCardInformationFormOrganism />);
    
    const creditCardInformationFormOrganism = screen.getByTestId('CreditCardInformationFormOrganism');

    expect(creditCardInformationFormOrganism).toBeInTheDocument();
  });
});