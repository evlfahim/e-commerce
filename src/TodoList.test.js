import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList', () => {
  render(<TodoList todos={[]} />);
  const linkElement = screen.getByText(/no todos/i);
  expect(linkElement).toBeInTheDocument();
});
