import {createContext} from 'react';
import {AuthState} from '.';

export type ContextProps = {
  authState: AuthState;
  signIn: () => void;
};

export const AuthContext = createContext({} as ContextProps);
