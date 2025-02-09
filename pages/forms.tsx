import { RegistrationStoreProvider } from '@/providers/registration-store-provider';
import RegistrationForm from '@/components/layout/registration-form';

const Forms = () => {
  return (
    <RegistrationStoreProvider>
      <RegistrationForm />
    </RegistrationStoreProvider>
  );
};

export default Forms;
