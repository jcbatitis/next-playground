import { useRegistrationStore } from '@/providers/registration-store-provider';
import type { RegistrationStore } from '@/stores/registration-store';

const RegistrationResult = () => {
  const {
    given_name,
    family_name,
    phone_number,
    email,
    resetForm,
    resetField,
  } = useRegistrationStore((state: RegistrationStore) => state);
  const handleReset = () => {
    resetForm();
  };
  const handleResetName = () => {
    resetField('given_name');
  };
  return (
    <main>
      <div>given_name - {given_name}</div>
      <div>family_name - {family_name}</div>
      <div>phone_number - {phone_number}</div>
      <div>email - {email}</div>
      <div>
        <button type={'button'} onClick={handleReset}>
          Reset
        </button>
        <button type={'button'} onClick={handleResetName}>
          Reset name
        </button>
      </div>
    </main>
  );
};

export default RegistrationResult;
