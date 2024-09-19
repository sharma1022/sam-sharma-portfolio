import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Navbar from "@/components/navbar";
import { routes } from "@/data/navRoutes";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Sam Sharma",
  description: "Sam Sharma's web dev portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background",
          montserrat.className,
        )}
      >
        <ThemeProvider  attribute="class" defaultTheme="light">
        <Navbar routes={routes} />
        <main>
          {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
