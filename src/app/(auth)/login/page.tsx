import React, { Suspense } from "react";
import { Metadata } from "next";
import LoginForm from "@/app/(auth)/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

const Login: React.FC = () => {
  return (
    <>
      <div className="h-dvh flex justify-center items-center">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </>
  );
};

export default Login;
