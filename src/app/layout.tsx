"use client";

import { Header } from "@/components/widgets";
import { Provider } from "react-redux";
import store from "@/store";
import "../styles/globals.css";
import "../styles/vars.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
