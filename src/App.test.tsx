import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header-one', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Your application has been successfully deplyed with travis cicd.../i);

  expect(linkElement).toBeInTheDocument();
});