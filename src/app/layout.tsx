"use client";

import { useEffect } from "react";
import { Roboto } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider, theme } from "antd";
import { useDarkModeStore } from "@/store/darkmodeStore";
import { ClientProviders } from "./components/ClientProviders";
import Loader from "./components/loader/Loader";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { isDarkMode, loadInitialDarkMode, isLoading } = useDarkModeStore();

  useEffect(() => {
    loadInitialDarkMode();
  }, [loadInitialDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <App>
            <ClientProviders>
              <ConfigProvider
                theme={{
                  algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                  token: {
                    fontFamily: roboto.style.fontFamily,
                  },
                }}
              >
                <App>{isLoading ? <Loader /> : children}</App>
              </ConfigProvider>
            </ClientProviders>
          </App>
        </AntdRegistry>
      </body>
    </html>
  );
}
