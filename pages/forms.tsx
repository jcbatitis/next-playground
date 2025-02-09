import { RegistrationStoreProvider } from '@/providers/registration-store-provider';
import RegistrationForm from '@/components/registration-form';
import RegistrationResult from '@/components/registration-result';

const Forms = () => {
  return (
    <RegistrationStoreProvider>
      <RegistrationForm />
      <RegistrationResult />
    </RegistrationStoreProvider>
  );
};

export default Forms;
