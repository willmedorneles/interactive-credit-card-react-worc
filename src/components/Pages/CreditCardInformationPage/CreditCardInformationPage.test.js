import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreditCardInformationPage from './CreditCardInformationPage';

describe('<CreditCardInformationPage />', () => {
  test('it should mount', () => {
    render(<CreditCardInformationPage />);
    
    const creditCardInformationPage = screen.getByTestId('CreditCardInformationPage');

    expect(creditCardInformationPage).toBeInTheDocument();
  });
});