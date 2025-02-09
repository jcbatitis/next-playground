import { useRegistrationStore } from '@/providers/registration-store-provider';
import type { RegistrationStore } from '@/stores/registration-store';
import TextField from '@/components/ui/text-field';
import React from 'react';

const RegistrationResult = () => {
  const { given_name, family_name, phone_number, email } = useRegistrationStore(
    (state: RegistrationStore) => state
  );
  return (
    <main className='m-4 flex flex-col gap-4 rounded-md bg-gray-600 p-4 text-white'>
      <h1>Result</h1>

      <TextField
        label='Given Name'
        name='given_name'
        value={given_name}
        readonly={true}
      ></TextField>
      <TextField
        label='Family Name'
        name='family_name'
        value={family_name}
        readonly={true}
      ></TextField>
      <TextField
        label='Email'
        name='email'
        value={email}
        readonly={true}
      ></TextField>
      <TextField
        label='Phone Number'
        name='phone_number'
        value={phone_number}
        readonly={true}
      ></TextField>
    </main>
  );
};

export default RegistrationResult;
