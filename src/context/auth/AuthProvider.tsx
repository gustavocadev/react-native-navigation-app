import React from 'react';
import {useReducer} from 'react';
import type {ReactNode} from 'react';
import {AuthContext, authReducer} from './';

export type AuthState = {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
};

const Auth_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  favoriteIcon: undefined,
  username: undefined,
};

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  //actions
  const signIn = () => {
    dispatch({
      type: 'SIGN_IN',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState: state,
        // actions
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
