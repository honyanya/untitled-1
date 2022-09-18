import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../Hello';

test('renders "Untitled"', () => {
  render(<Hello message={"hello"} />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
