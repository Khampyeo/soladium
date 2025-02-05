"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import DarkModeToggle from "../components/dark-mode/DarkModeToggle";
import Loader from "../components/loader/Loader";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const path = usePathname();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login?redirect=" + path);
    }
  }, [isAuthenticated, router, path]);

  return (
    <>
      {!isAuthenticated ? (
        <Loader />
      ) : (
        <div className="h-dvh w-screen bg-background-primary">
          <div className="absolute right-4 top-4 bg-background-primary">
            <DarkModeToggle />
          </div>
          {children}
        </div>
      )}
    </>
  );
};
export default MainLayout;
