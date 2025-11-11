import { Metadata } from "next";

import { QuemSomosPageContent } from "@/components/pages/quem-somos-page-content";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça as idealizadoras do Cadê Meu Brechó? e descubra quem está por trás da curadoria de moda circular e conteúdos originais.",
};

export default function QuemSomosPage() {
  return <QuemSomosPageContent />;
}

