/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from '@/components/ui/text-field';
import React from 'react';
import '@testing-library/jest-dom';

describe('TextField Component', () => {
  it('renders correctly with label and input field', () => {
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
  it('renders the input type field correctly', () => {
    const handleChange = jest.fn();
    render(
      <TextField
        label='URL'
        name='url'
        type='url'
        value='www.google.com'
        onChange={handleChange}
      />
    );
    const url = screen.getByLabelText('URL');
    expect(url).toHaveAttribute('type', 'url');
  });
  it('calls onChange when typing in the input field', () => {
    const handleChange = jest.fn();
    render(
      <TextField
        label='Email'
        name='email'
        type='email'
        value='john.doe@gmail.com'
        onChange={handleChange}
      />
    );
    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'john.doe+1@gmail.com' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  it('renders as readonly when readonly is true', () => {
    render(
      <TextField
        label='ReadOnly Field'
        name='readonlyField'
        value='ReadOnlyText'
        readonly
      />
    );
    const span = screen.getByText('ReadOnlyText');
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('bg-gray-500');
  });
  it('renders the text field as required', () => {
    const handleChange = jest.fn();
    render(
      <TextField
        label='Family Name'
        name='family_name'
        type='text'
        value='Doe'
        onChange={handleChange}
        required={true}
      />
    );
    const input = screen.getByLabelText('Family Name');
    expect(input).toBeInTheDocument();
    expect(input).toBeRequired();
  });
});
