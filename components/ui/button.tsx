import React from 'react';

type ButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        'w-full rounded-md bg-blue-500 p-2 text-white active:bg-blue-400 disabled:bg-gray-400'
      }
    >
      {label}
    </button>
  );
};

export default Button;
