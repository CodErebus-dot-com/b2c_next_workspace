import { AuthContext } from '@src/contexts';
import { ReactNode, useContext } from 'react';

interface UnauthenticatedTemplateProps {
    children: ReactNode;
}

export const UnauthenticatedTemplate = ({ children }: UnauthenticatedTemplateProps): JSX.Element | null => {
    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated) {
        return <>{children}</>;
    }

    return null;
}
