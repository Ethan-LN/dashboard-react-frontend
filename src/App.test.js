import { render, screen } from '@testing-library/react';
import App from './App';

test("Screen contains 'Hello world!'", () => {
  render(<App />);
  const text = screen.getByText("Hello world!");
  expect(text).toBeInTheDocument();
});

