/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Button from '@/components/ui/button';

describe('Button Component', () => {
  it('renders the button element for type button', () => {
    const handleChange = jest.fn();
    render(<Button type='button' label='Submit' onClick={handleChange} />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  it('renders the button element for type submit', () => {
    render(<Button type='submit' label='Submit' />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
