import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputGroupMolecule from './InputGroupMolecule';

describe('<InputGroupMolecule />', () => {
  test('it should mount', () => {
    render(<InputGroupMolecule />);
    
    const inputGroupMolecule = screen.getByTestId('InputGroupMolecule');

    expect(inputGroupMolecule).toBeInTheDocument();
  });
});