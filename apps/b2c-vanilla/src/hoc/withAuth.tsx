"use client";
import { useRouter } from "next/navigation";
import { useEffect, useContext } from "react";
import { AuthenticatedTemplate } from "@components";
import { AuthContext } from "@contexts";

export function withAuth<T extends {}>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithAuthComponent(props: T) {
    const router = useRouter();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/");
      } else {
        router.push(window.location.pathname);
      }
    }, [isAuthenticated, router]);

    return (
      <AuthenticatedTemplate>
        <WrappedComponent {...props} />
      </AuthenticatedTemplate>
    );
  };
}
