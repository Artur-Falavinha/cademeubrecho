import { Metadata } from "next";

import { ContatoPageContent } from "@/components/pages/contato-page-content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Cadê Meu Brechó? pelo e-mail, redes sociais ou WhatsApp. Estamos prontas para conversar sobre moda circular.",
};

export default function ContatoPage() {
  return <ContatoPageContent />;
}

