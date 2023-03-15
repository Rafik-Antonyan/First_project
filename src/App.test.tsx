import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './pages/HomePage';

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByTestId('unit-test')
  expect(linkElement).toBeInTheDocument();
});
