import type { Metadata } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import GlobalNavbar from "@/components/portfolio/GlobalNavbar";
import "./globals.css";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"], // Almarai is primarily Arabic, but latin is often available. Next.js might complain if subset isn't specified correctly. Let's try 'arabic'. Or wait, Almarai supports arabic. Let's just use empty subsets or standard if it errors.
  weight: ["300", "400", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Prisma | Creative Studio",
  description: "A worldwide network of visual artists, filmmakers and storytellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${almarai.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="flex flex-col bg-background text-foreground">
        <GlobalNavbar />
        {children}
      </body>
    </html>
  );
}
