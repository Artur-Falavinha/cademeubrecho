import { Metadata } from "next";
import { GlossarioPageContent } from "@/components/pages/glossario-page-content";

export const metadata: Metadata = {
  title: "Glossário",
  description:
    "Entenda os principais conceitos sobre moda sustentável, economia circular e consumo consciente utilizados pelo projeto Cadê Meu Brechó?",
};

export default function GlossarioPage() {
  return <GlossarioPageContent />;
}
