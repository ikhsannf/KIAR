import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "KIAR | Premium Fashion",
  description: "Discover timeless elegance and modern style at KIAR. Premium fashion for the discerning individual.",
  keywords: ["fashion", "premium", "clothing", "style", "KIAR", "luxury"],
  authors: [{ name: "KIAR" }],
  openGraph: {
    title: "KIAR | Premium Fashion",
    description: "Discover timeless elegance and modern style at KIAR.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased font-sans bg-[var(--color-primary)] text-[var(--color-black)]`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

