import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
