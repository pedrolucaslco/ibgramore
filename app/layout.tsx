import type { Metadata } from "next";
import "./globals.css";
import { geist, lora } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Igreja Batista do Gramoré",
    template: "%s • Igreja Batista do Gramoré",
  },
  description: "Igreja Batista do Gramoré, em Natal - RN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`fade-in ${geist.variable} ${lora.variable} bg-page font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

