import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello Dante link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello Dante/i);
  expect(linkElement).toBeInTheDocument();
});

