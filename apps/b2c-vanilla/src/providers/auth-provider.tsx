import { AuthContext } from "@src/contexts";
import { useIsAuthenticated, useInstance } from "@hooks";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useInstance();

  return (
    <AuthContext.Provider value={{ isAuthenticated, instance }}>
      {children}
    </AuthContext.Provider>
  );
};
