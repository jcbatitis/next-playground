/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import TextField from '@/components/ui/text-field';
import React from 'react';
import '@testing-library/jest-dom';

describe('TextField Component', () => {
  it('renders the label and input field when not in read-only', () => {
    const handleChange = jest.fn();
    render(
      <TextField
        label='First Name'
        name='first_name'
        value=''
        onChange={handleChange}
      />
    );
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
  });
  it('displays correct value in the input field', () => {
    const handleChange = jest.fn();
    render(
      <TextField
        label='First Name'
        name='first_name'
        value='John Doe'
        onChange={handleChange}
      />
    );
    const field = screen.getByLabelText('First Name') as HTMLInputElement;
    expect(field.value).toBe('John Doe');
  });
});
