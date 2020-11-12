import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header-one', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Header One/i);

  expect(linkElement).toBeInTheDocument();
});

// test('renders input', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/header one/);
//   expect(linkElement).tobe
// });
