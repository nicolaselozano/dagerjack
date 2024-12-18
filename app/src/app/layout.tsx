import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background/Background";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dot Dager",
  description: "Landing Page Dager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
        style={{ fontFamily: "var(--font-fira-code)" }}
      >
        {/* Fondo siempre detrás */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Background />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10">{children}</div>

      </body>
    </html>
  );
}
