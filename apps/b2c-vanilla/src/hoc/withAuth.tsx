"use client";
import { createStandaloneToast } from "@chakra-ui/react";
import { AuthenticatedTemplate } from "@components";
import { AuthContext } from "@contexts";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const { ToastContainer, toast } = createStandaloneToast();

export function withAuth<T extends {}>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithAuthComponent(props: T) {
    const router = useRouter();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/");
        <ToastContainer />;
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
toast({
  title: "Protected Route",
  description: "Please login to access Profile",
  status: "warning",
  position: "bottom-left",
  duration: 5000,
  isClosable: true,
});
