/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Button from '@/components/ui/button';

describe('Button Component', () => {
  it('renders the button for type button', () => {
    render(<Button label='Submit' />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  it('renders the button for type submit', () => {
    render(<Button type='submit' label='Submit' />);
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });
  it('calls onClick handler when clicked', () => {
    const handler = jest.fn();
    render(<Button type='submit' label='Submit' onClick={handler} />);
    const button = screen.getByText('Submit');
    fireEvent.click(button);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('renders the button disabled', () => {
    render(<Button type='submit' label='Submit' disabled={true} />);
    const button = screen.getByText('Submit');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:bg-gray-400');
  });
  it('does not call onClick when disabled', () => {
    const handler = jest.fn();
    render(
      <Button type='submit' label='Submit' disabled={true} onClick={handler} />
    );
    const button = screen.getByText('Submit');
    fireEvent.click(button);
    expect(handler).not.toHaveBeenCalled();
  });
});
