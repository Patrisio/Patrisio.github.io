import { createContext } from 'react';

export const Context = createContext({
  lang: '',
  changeLang: () => {},
  t: () => {}
});