import { Metadata } from "next";

import { NewsletterPageContent } from "@/components/pages/newsletter-page-content";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Assine a newsletter Cadê Meu Brechó? e receba matérias exclusivas sobre moda circular, sustentabilidade e brechós de Curitiba.",
};

export default function NewsletterPage() {
  return <NewsletterPageContent />;
}

