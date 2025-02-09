import React from 'react';

type ButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ label, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'w-full rounded-md bg-blue-500 p-2 text-white active:bg-blue-400'
      }
    >
      {label}
    </button>
  );
};

export default Button;
