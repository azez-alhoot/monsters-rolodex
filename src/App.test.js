import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Monster Rolodex/i);
  expect(linkElement).toBeInTheDocument();
});
