"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "../sidebar/Sidebar";
import styles from "./common.module.scss";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className={styles.layout}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div
          className={`${styles.content_container} ${
            sidebarOpen ? styles.sidebar_opened : styles.sidebar_closed
          }`}
        >
          <main className={`${styles.main_content} `}>
            <div className={styles.content}>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
