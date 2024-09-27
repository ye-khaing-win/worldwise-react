import {
  createContext,
  FC,
  ReactNode,
  useReducer,
} from "react";

// DATA
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

// TYPES
interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface State {
  user: User | null;
  isAuthenticated: boolean;
}

enum ActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface LoginAction {
  type: ActionType.LOGIN;
  payload: User;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

type Action = LoginAction | LogoutAction;

// --------------------------------------------------------------------
const initialState = {
  user: null,
  isAuthenticated: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      throw new Error("Unknown action type");
  }
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider: FC<AuthProviderProps> = ({
  children,
}) => {
  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login = (email: string, password: string) => {
    if (
      email === FAKE_USER.email &&
      password === FAKE_USER.password
    ) {
      dispatch({
        type: ActionType.LOGIN,
        payload: FAKE_USER,
      });
    }
  };

  const logout = () => {
    dispatch({
      type: ActionType.LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
