import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Task-List",
  description: "Next.js + Tailwind CSS + TypeScript + Tests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
