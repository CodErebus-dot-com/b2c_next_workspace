import { ReactNode, useContext } from 'react';
import { AuthContext } from '@contexts';

interface AuthenticatedTemplateProps {
    children: ReactNode;
}

export const AuthenticatedTemplate = ({ children }: AuthenticatedTemplateProps) => {
    const { isAuthenticated } = useContext(AuthContext)

    if (isAuthenticated) {
        return children;
    }

    return null;
}
