import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputAtom from './InputAtom';

describe('<InputAtom />', () => {
  test('it should mount', () => {
    render(<InputAtom />);
    
    const inputAtom = screen.getByTestId('InputAtom');

    expect(inputAtom).toBeInTheDocument();
  });
});