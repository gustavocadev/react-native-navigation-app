import type {AuthState} from './';

type AuthAction = {
  type: 'SIGN_IN';
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        username: 'NO USERNAME',
      };
    default:
      return state;
  }
};
