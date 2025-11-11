import { Metadata } from "next";

import { ConteudosPageContent } from "@/components/pages/conteudos-page-content";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Conheça o ecossistema de conteúdos do Cadê Meu Brechó?: podcast, vídeos e comunidade para mergulhar na moda circular.",
};

export default function ConteudosPage() {
  return <ConteudosPageContent />;
}

