import type { Metadata } from "next";
import { Onest, Playfair_Display } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-onest",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Наталя Внукова — UI/UX та Product Designer",
  description: "Проєктую вебсервіси для бізнесу, якими просто користуватися.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${onest.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
