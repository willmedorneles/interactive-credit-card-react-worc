import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreditCardInformationTemplate from './CreditCardInformationTemplate';

describe('<CreditCardInformationTemplate />', () => {
  test('it should mount', () => {
    render(<CreditCardInformationTemplate />);
    
    const creditCardInformationTemplate = screen.getByTestId('CreditCardInformationTemplate');

    expect(creditCardInformationTemplate).toBeInTheDocument();
  });
});