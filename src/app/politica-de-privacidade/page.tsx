import { Metadata } from "next";

import { PoliticaPrivacidadePageContent } from "@/components/pages/politica-privacidade-page-content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Conheça a Política de Privacidade do Cadê Meu Brechó? e entenda como tratamos dados pessoais em conformidade com a LGPD.",
};

export default function PoliticaPrivacidadePage() {
  return <PoliticaPrivacidadePageContent />;
}

