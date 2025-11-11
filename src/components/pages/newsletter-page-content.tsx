"use client";

import { motion } from "framer-motion";
import { Feather, Sparkles } from "lucide-react";

import { NewsletterForm } from "@/components/newsletter-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const newsletters = [
  {
    title: "Por que Curitiba está apaixonada pela moda de segunda mão?",
    author: "Isabelle Sestari",
    content: [
      "Curitiba está vivendo uma verdadeira revolução fashion. Brechós deixaram de ser espaços esquecidos para se tornarem destinos obrigatórios para quem busca estilo, economia e consciência. Mas afinal, quem são os consumidores dessa moda circular? E por que cada vez mais curitibanos estão preferindo roupas usadas?",
      "Segundo especialistas, três fatores explicam o crescimento da moda de segunda mão: economia com peças de qualidade e tecidos nobres; consciência ambiental para reduzir impactos e prolongar o ciclo de vida das roupas; e cultura e estilo, já que moda é cíclica e ressignificar peças é tendência criativa.",
      "Comprar em brechó não é apenas sobre economizar, é sobre dar significado às roupas e integrar um movimento que valoriza história e sustentabilidade. O público curitibano que garimpa é descolado, consciente e antenado: quer saber quem fez suas roupas, busca peças que expressem identidade e acredita no design para a sustentabilidade.",
      "Décadas atrás, brechós eram vistos como espaços desorganizados. Hoje, a curadoria cuidadosa, peças bem conservadas e ambientes convidativos atraem um público cada vez maior e consolidam a moda de segunda mão como estilo de vida.",
      "O futuro é circular: jovens influenciam as famílias, pessoas com mais de 70 anos redescobrem peças com qualidade e conforto, e cresce a ideia de reconfigurar roupas para dar nova vida aos tecidos.",
      "Comprar de segunda mão não é só sobre preço: é sobre história, identidade e responsabilidade. Escolher peças que duram ajuda a construir um futuro mais sustentável para a moda.",
      "Quer descobrir onde garimpar? Acesse o app do Cadê Meu Brechó? e encontre os melhores brechós da capital paranaense para iniciar sua jornada na moda circular.",
    ],
  },
  {
    title: "Futuro dos Brechós: a geração consciente e a moda que se reinventa",
    author: "Julia Budal",
    content: [
      "A moda está mudando, e a nova geração tem papel fundamental nesse processo. Jovens repensam a forma de consumir e se vestir, e os brechós ocupam um lugar central nesse movimento. O que antes era sinônimo de necessidade hoje é expressão, identidade e consciência coletiva.",
      "A Geração Z ressignifica o consumo de segunda mão, motivada por questões econômicas e pela busca por autenticidade. Vestir-se deixa de ser seguir tendências para ser construir um estilo próprio alinhado a sustentabilidade e criatividade.",
      "Nath Alencar, criadora de conteúdo em Curitiba, compartilha roteiros de garimpo e mostra como o brechó é um espaço de liberdade. Jovens abandonaram o preconceito e descobriram um mar de oportunidades para se expressar com qualquer valor.",
      "Redes sociais impulsionam esse movimento. Vídeos de tours, looks e bastidores criam comunidade e inspiram novas pessoas a experimentar a moda circular. Os brechós modernos de Curitiba investem em curadoria, decoração e experiências integradas, tornando-se pontos de encontro entre moda, sustentabilidade e cultura urbana.",
      "A crise de acessibilidade das roupas novas e o distanciamento do luxo tradicional reforçam o papel dos brechós. A exclusividade mora na criatividade e no propósito, não no preço.",
      "A moda circular veio para ficar. Fast fashions sentem a pressão, mas a geração consciente mantém o movimento vivo. O futuro dos brechós está ligado a quem enxerga a roupa como ferramenta de expressão e transformação social.",
    ],
  },
];

export function NewsletterPageContent() {
  return (
    <div className="space-y-16">
      <motion.section
        className="grid gap-10 rounded-3xl border border-border/80 bg-white/90 px-6 py-12 shadow-sm md:grid-cols-[1.1fr,0.9fr] md:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
            <Sparkles className="h-4 w-4" />
            cadê meu brechó? – newsletter
          </span>
          <h1 className="font-heading text-4xl leading-tight text-primary-foreground md:text-5xl">
            Assine nossa newsletter editorial
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Receba histórias inéditas, bastidores dos brechós curitibanos, convites para eventos exclusivos e referências de moda
            circular diretamente no seu e-mail.
          </p>
          <div className="grid gap-4 text-sm text-muted-foreground">
            <p className="flex items-start gap-3">
              <Feather className="mt-1 h-5 w-5 text-primary" />
              Editorial quinzenal com entrevistas, guias de garimpo e dicas práticas para vestir circularidade.
            </p>
            <p className="flex items-start gap-3">
              <Feather className="mt-1 h-5 w-5 text-secondary" />
              Convites para encontros presenciais, podcasts e tours guiados por brechós de Curitiba.
            </p>
          </div>
        </div>
        <NewsletterForm />
      </motion.section>

      <section className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
            edições anteriores
          </span>
          <h2 className="font-heading text-3xl text-primary-foreground md:text-4xl">
            Leia as newsletters que já estão nas caixas de entrada
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            Enquanto você aguarda a próxima edição, explore o conteúdo completo das newsletters que inspiraram a comunidade Cadê
            Meu Brechó? a transformar o consumo de moda em Curitiba.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {newsletters.map((newsletter, index) => (
            <motion.article
              key={newsletter.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/70 bg-white/85 shadow-sm transition-shadow hover:shadow-xl">
                <CardHeader className="space-y-4 bg-gradient-to-br from-primary/20 via-white to-secondary/20 px-6 py-6">
                  <Badge className="w-fit rounded-full bg-primary/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-foreground">
                    newsletter
                  </Badge>
                  <CardTitle className="font-heading text-2xl leading-snug text-primary-foreground">
                    {newsletter.title}
                  </CardTitle>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    por {newsletter.author}
                  </p>
                </CardHeader>
                <CardContent className="px-6 py-6">
                  <CardDescription className="space-y-4 text-base leading-relaxed text-muted-foreground">
                    {newsletter.content.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

