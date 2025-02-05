"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import DefaultLayout from "@/app/components/layout/Layout";
import Loader from "@/app/components/loader/Loader";
import { useAuth } from "@/contexts/AuthContext";

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

  return !isAuthenticated ? (
    <Loader />
  ) : (
    <DefaultLayout>{children}</DefaultLayout>
  );
};
export default MainLayout;
