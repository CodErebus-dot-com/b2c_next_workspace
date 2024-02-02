import { AuthContext } from "@contexts";
import { ReactNode, useContext } from "react";

interface AuthenticatedTemplateProps {
  children: ReactNode;
}

export const AuthenticatedTemplate = ({
  children,
}: AuthenticatedTemplateProps): JSX.Element | null => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return null;
};
