"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const glossaryTerms = [
  {
    term: "Moda sustentável",
    definition:
      "Conjunto de práticas que buscam reduzir o impacto ambiental e social da indústria da moda. Envolve desde o uso de matérias-primas ecológicas até a valorização do trabalho justo e do consumo responsável. A moda sustentável propõe um repensar sobre como as roupas são produzidas, consumidas e descartadas.",
  },
  {
    term: "Brechós Curitiba",
    definition:
      "Espaços físicos ou virtuais localizados na cidade de Curitiba que comercializam roupas e acessórios de segunda mão. Além de incentivar o reaproveitamento de peças, os brechós promovem o consumo consciente e fortalecem a economia local, contribuindo para a popularização da moda circular na região.",
  },
  {
    term: "Consumo consciente",
    definition:
      "Atitude de repensar os hábitos de compra, levando em consideração os impactos ambientais, sociais e econômicos de cada produto. No contexto da moda, o consumo consciente implica escolher marcas éticas, reutilizar peças e evitar o desperdício, priorizando qualidade e propósito em vez de quantidade.",
  },
  {
    term: "Economia circular",
    definition:
      "Modelo econômico que se opõe à lógica do 'extrair, produzir, descartar'. Propõe a reutilização, o reaproveitamento e a reciclagem de materiais, prolongando o ciclo de vida dos produtos. Na moda, significa dar novos usos às roupas, promover trocas e incentivar a compra de itens de segunda mão.",
  },
  {
    term: "Moda de segunda mão",
    definition:
      "Refere-se à comercialização e ao uso de roupas e acessórios que já tiveram um dono anterior. Essa prática estimula a sustentabilidade, reduz o descarte têxtil e democratiza o acesso à moda, tornando-a mais acessível e menos poluente.",
  },
  {
    term: "Estilo acessível",
    definition:
      "Ideia de que é possível se vestir bem, com autenticidade e personalidade, sem depender de grandes marcas ou altos custos. O estilo acessível valoriza a criatividade, o garimpo em brechós e o reaproveitamento de peças, mostrando que moda e economia podem andar juntas.",
  },
  {
    term: "Slow fashion",
    definition:
      "Movimento contrário ao fast fashion. Defende uma produção mais lenta, ética e sustentável, que respeita o meio ambiente, os trabalhadores e o consumidor. O slow fashion incentiva o consumo duradouro, o design atemporal e a valorização das peças feitas com cuidado e responsabilidade.",
  },
];

export function GlossarioPageContent() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/50 bg-white/98 shadow-xl border border-white/50 px-6 py-6 text-center md:rounded-3xl md:px-8 md:py-8"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
          palavras-chave do projeto
        </span>
        <h1 className="mt-2 font-heading text-2xl text-foreground md:text-3xl">
          Glossário de Moda Circular
        </h1>
        <p className="mt-2 text-sm text-foreground/70">
          Entenda os principais conceitos utilizados pelo Cadê Meu Brechó
        </p>
      </motion.div>

      <section className="grid gap-6 md:grid-cols-2 bg-transparent">
        {glossaryTerms.map((item, index) => (
          <motion.article
            key={item.term}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <Card className="h-full border-white/50 bg-white/98 shadow-sm  ">
              <CardHeader>
                <Badge className="w-fit rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground">
                  conceito
                </Badge>
                <CardTitle className="mt-3 font-heading text-xl text-foreground sm:text-2xl">
                  {item.term}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {item.definition}
                </p>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
