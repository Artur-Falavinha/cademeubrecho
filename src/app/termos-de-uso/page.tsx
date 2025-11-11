import { Metadata } from "next";

import { TermosUsoPageContent } from "@/components/pages/termos-uso-page-content";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Leia os Termos de Uso do Cadê Meu Brechó? e entenda as condições para acessar nossos conteúdos e serviços.",
};

export default function TermosUsoPage() {
  return <TermosUsoPageContent />;
}

