import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Untitled"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Untitled/i);
  expect(linkElement).toBeInTheDocument();
});
