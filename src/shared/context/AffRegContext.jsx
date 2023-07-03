import { createContext } from 'react';

export const AffRegContext = createContext({
  isAffRegistered: false,
  affregister: () => {},
});
