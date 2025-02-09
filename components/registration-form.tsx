import React from 'react';
import { useRegistrationStore } from '@/providers/registration-store-provider';
import type { RegistrationStore } from '@/stores/registration-store';

const RegistrationForm = () => {
  const { given_name, family_name, phone_number, email, setField } =
    useRegistrationStore((state: RegistrationStore) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(e.target.name, e.target.value);
    console.log(e);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label htmlFor='given_name'>Given Name</label>
        <input
          type={'text'}
          name='given_name'
          onChange={handleChange}
          value={given_name}
        />
      </div>
      <div>
        <label htmlFor='family_name'>Family Name</label>
        <input
          type={'text'}
          name='family_name'
          onChange={handleChange}
          value={family_name}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type={'text'}
          name='email'
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor='phone_number'>Phone Number</label>
        <input
          type={'text'}
          name='phone_number'
          onChange={handleChange}
          value={phone_number}
        />
      </div>
      <button type={'submit'}>Submit</button>
    </form>
  );
};

export default RegistrationForm;
