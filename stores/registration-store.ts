import { createStore } from 'zustand/vanilla';

export type RegistrationState = {
  given_name: string;
  family_name: string;
  email: string;
  phone_number: string;
};

export type RegistrationActions = {
  setField: (field: string, value: string) => void;
  resetField: (field: string) => void;
  resetForm: () => void;
};

export type RegistrationStore = RegistrationState & RegistrationActions;

export const initRegistrationStore = (): RegistrationState => {
  return {
    given_name: '',
    family_name: '',
    email: '',
    phone_number: '',
  };
};

export const defaultInitState: RegistrationState = {
  given_name: '',
  family_name: '',
  email: '',
  phone_number: '',
};

export const createRegistrationStore = (
  initState: RegistrationState = defaultInitState
) => {
  return createStore<RegistrationStore>((set) => ({
    ...initState,
    setField: (field, value) =>
      set((state) => ({
        ...state,
        [field]: value,
      })),

    resetField: (field) =>
      set((state) => ({
        ...state,
        [field]: '',
      })),
    resetForm: () =>
      set(() => ({
        ...initState,
      })),
  }));
};
