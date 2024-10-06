import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import AppQueryClientProvider from "@/components/providers/AppQueryClientProvider";
import ReduxProvider from "@/components/providers/ReduxProviders";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dara AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <AppQueryClientProvider>
            <ThemeProvider attribute="class" enableSystem={false}>
              {children}
            </ThemeProvider>
          </AppQueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
