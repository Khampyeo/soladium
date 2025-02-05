import DarkModeToggle from "../components/dark-mode/DarkModeToggle";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-dvh w-screen bg-background-primary">
      <div className="absolute right-5 top-5">
        <DarkModeToggle />
      </div>
      {children}
    </div>
  );
};
export default AuthLayout;
