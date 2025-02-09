'use client';

import {
  type RegistrationStore,
  initRegistrationStore,
  createRegistrationStore,
} from '@/stores/registration-store';
import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand/react';

export type RegistrationStoreApi = ReturnType<typeof createRegistrationStore>;

export const RegistrationStoreContext = createContext<
  RegistrationStoreApi | undefined
>(undefined);

export interface RegistrationStoreProviderProps {
  children: ReactNode;
}

export const RegistrationStoreProvider = ({
  children,
}: RegistrationStoreProviderProps) => {
  const storeRef = useRef<RegistrationStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createRegistrationStore(initRegistrationStore());
  }
  return (
    <RegistrationStoreContext.Provider value={storeRef.current}>
      {children}
    </RegistrationStoreContext.Provider>
  );
};

export const useRegistrationStore = <T,>(
  selector: (store: RegistrationStore) => T
): T => {
  const registrationStoreContext = useContext(RegistrationStoreContext);

  if (!registrationStoreContext) {
    throw new Error('useRegistrationStore() must be used within the context');
  }

  return useStore(registrationStoreContext, selector);
};
