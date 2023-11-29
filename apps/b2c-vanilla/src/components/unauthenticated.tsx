import { ReactNode, useContext } from 'react';
import { AuthContext } from '@src/contexts';

interface UnauthenticatedTemplateProps {
    children: ReactNode;
}

export const UnauthenticatedTemplate = ({ children }: UnauthenticatedTemplateProps) => {
    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated) {
        return children;
    }

    return null;
}
