"use client";

import Header from "@/components/widgets/header/header";
import { Provider } from "react-redux";
import store from "@/store/store";
import "../styles/globals.css";
import "../styles/vars.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find books",
  description: "Find books by Google Books API",
};

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
