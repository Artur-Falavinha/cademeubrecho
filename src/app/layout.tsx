import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTopButton } from "@/components/back-to-top-button";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://artur-falavinha.github.io/cademeubrecho";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Cadê Meu Brechó?",
    default: "Cadê Meu Brechó? | Moda circular em Curitiba",
  },
  description:
    "Descubra brechós, histórias e conteúdos sobre moda circular em Curitiba. Cadê Meu Brechó? conecta você a iniciativas de consumo consciente e estilo sustentável.",
  keywords: [
    "brechós em Curitiba",
    "moda sustentável",
    "moda circular",
    "consumo consciente",
    "brechó",
    "Curitiba",
  ],
  authors: [{ name: "Cadê Meu Brechó?" }],
  creator: "Cadê Meu Brechó?",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Cadê Meu Brechó?",
    title: "Cadê Meu Brechó? | Moda circular em Curitiba",
    description:
      "Mapa editorial dos brechós curitibanos com matérias, podcasts e newsletter sobre moda circular.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Logo Cadê Meu Brechó?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cadê Meu Brechó? | Moda circular em Curitiba",
    description:
      "Conteúdos, brechós e histórias sobre moda circular na capital paranaense.",
    images: [`${siteUrl}/logo.png`],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("antialiased", dmSans.variable, inter.variable)}>
        <div className="flex min-h-screen flex-col bg-background/90">
          <SiteHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-[1600px] px-4 pb-16 pt-8 md:px-6 lg:px-14">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
        <BackToTopButton />
      </body>
    </html>
  );
}
