import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

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
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background",montserrat.className)}
      >
        {children}
      </body>
    </html>
  );
}
