
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders the TodoList component', () => {
  render(<TodoList />);
  const titleElement = screen.getByText(/Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders initial todos', () => {
  render(<TodoList />);
  const todoText = screen.getByText(/Learn React/i);
  expect(todoText).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add Todo/i);
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  const newTodo = screen.getByText(/New Todo/i);
  expect(newTodo).toBeInTheDocument();
});

test('can toggle the completion status of a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todo);
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  const todoText = screen.queryByText(/Learn React/i);
  expect(todoText).not.toBeInTheDocument();
});
