import type { Metadata } from "next";
import { M_PLUS_1 } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes";
const fontMplus = M_PLUS_1(
  { 
    subsets: ["latin"] ,
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-Mplus",

  }
);

export const metadata: Metadata = {
  title: "Careplus",
  description: "患者管理のNext.jsアプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn("min-h-screen bg-dark-300 fontMplus", fontMplus)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
