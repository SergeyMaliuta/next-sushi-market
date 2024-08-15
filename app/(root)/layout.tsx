import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Next Sushi Market",
  description: "Best Asian dishes with home delivery",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
