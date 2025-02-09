import React from 'react';

type TextFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'url' | 'password';
  required?: boolean;
  readonly?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  readonly = false,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name}>{label}</label>
      {readonly === false ? (
        <input
          type={type}
          id={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          className='mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm'
          required={required}
        />
      ) : (
        <span className='mt-1 block min-h-11 w-full rounded-md border border-gray-500 bg-gray-500 p-2 shadow-sm'>
          {value}
        </span>
      )}
    </div>
  );
};

export default TextField;
