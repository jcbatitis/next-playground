import React from 'react';
import { useRegistrationStore } from '@/providers/registration-store-provider';
import type { RegistrationStore } from '@/stores/registration-store';
import TextField from '@/components/ui/text-field';
import Button from '@/components/ui/button';

const RegistrationForm = () => {
  const { given_name, family_name, phone_number, email, setField } =
    useRegistrationStore((state: RegistrationStore) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(e.target.name, e.target.value);
    console.log(e);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 p-4'
    >
      <TextField
        label='Given Name'
        name='given_name'
        value={given_name}
        onChange={handleChange}
        required={true}
      ></TextField>
      <TextField
        label='Family Name'
        name='family_name'
        value={family_name}
        onChange={handleChange}
        required={true}
      ></TextField>
      <TextField
        label='Email'
        name='email'
        value={email}
        onChange={handleChange}
        required={true}
      ></TextField>
      <TextField
        label='Phone Number'
        name='phone_number'
        value={phone_number}
        onChange={handleChange}
        required={true}
      ></TextField>
      <Button label='Submit' type='submit'></Button>
    </form>
  );
};

export default RegistrationForm;
