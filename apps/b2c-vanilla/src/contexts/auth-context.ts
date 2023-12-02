import { createContext } from "react";

export interface AuthContextProps {
  isAuthenticated: boolean;
  instance: any;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  instance: {},
});
