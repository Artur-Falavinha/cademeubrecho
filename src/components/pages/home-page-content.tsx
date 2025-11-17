"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const articleHero = {
  title:
    "Moda Sustentável em Curitiba: descubra os brechós que transformam consumo em consciência.",
  subtitle:
    "Uma curadoria editorial e afetiva para quem busca circularidade, criatividade e propósito na hora de se vestir.",
  highlight: "edição 01 • moda circular curitibana",
};

const featuredArticle = {
  slug: "moda-circular-brechos-curitiba",
  title: "Moda circular: o novo ciclo da economia que começa nos brechós de Curitiba",
  author: "Isabelle Sestari",
  image: assetPath("/fotoisabellesestari.jpg"),
  excerpt:
    "Nas ruas de Curitiba, uma revolução silenciosa acontece entre araras coloridas, tecidos reformados e peças com histórias passadas de geração em geração.",
  category: "Reportagem",
};

const realArticleContent = [
  "Nas ruas de Curitiba, uma revolução silenciosa acontece entre araras coloridas, tecidos reformados e peças com histórias passadas de geração em geração. A cidade, antes associada a um consumo mais tradicional, hoje vê florescer uma cena vibrante de moda circular, impulsionada por jovens, empreendedores criativos e especialistas que enxergam nas roupas de segunda mão não apenas um estilo, mas uma nova forma de pensar a economia.",
  "Para a economista e professora de design de moda entrevistada por nossa equipe, o fenômeno vai muito além de uma tendência passageira. “A moda circular é um caminho sem volta”, afirma. “Ela abarca dimensões econômicas, sociais e ambientais. É sobre ressignificar, transformar e valorizar o ciclo de vida de cada peça.”",
  "Nos últimos anos, os brechós curitibanos deixaram de ser espaços escondidos com cheiro de mofo para se tornarem verdadeiras vitrines de estilo e consciência. Com curadoria refinada e preocupação estética, eles passaram a atrair um público diverso de jovens engajados com sustentabilidade a senhoras que reencontram nos cabides as modelagens e tecidos que amavam décadas atrás. “Hoje há brechós com peças bem conservadas, bem expostas, e isso muda completamente a experiência. Curitiba pode ter demorado um pouco em relação a cidades como São Paulo e Rio, mas agora entrou nesse caminho sem volta”, analisa a economista.",
  "Mais que um comportamento de consumo, ela enxerga o movimento como uma mudança cultural profunda. “Na minha geração, ainda existia certo preconceito com roupa de segunda mão. Já os jovens ressignificam, transformam, costuram, adaptam. Eles olham para uma peça e enxergam novas possibilidades”, comenta. Essa nova mentalidade, segundo ela, também está transformando as famílias: “Os filhos influenciam os pais, os sobrinhos influenciam os tios. Essa mudança de olhar se espalha.”",
  "Entre os fatores econômicos, a especialista aponta que o consumo consciente também é uma resposta à lógica da moda rápida. “As pessoas dizem que são sustentáveis, mas compram na Shein. Onde está a coerência? O discurso e a prática precisam caminhar juntos”, provoca. Para ela, o barato ainda sai caro tanto para o planeta quanto para os trabalhadores. “Uma peça feita em condições análogas à escravidão, que dura duas lavagens, não pode competir com uma roupa bem cortada, de bom tecido, que vai atravessar décadas.”",
  "A economista também destaca o papel educativo dos próprios brechós: “Eles precisam ensinar o consumidor a reconhecer qualidade. Saber avaliar tecido, modelagem, aviamentos. Isso também é economia circular.”",
  "Curiosamente, essa consciência não vem apenas das novas gerações. A entrevistada conta que alguns brechós da cidade têm registrado o crescimento de um público com mais de 70 anos, que reencontra nas roupas usadas uma conexão com o passado e um novo espaço de expressão. “As pessoas mais velhas não querem roupas bege e sem graça. Elas querem algo interessante, jovial. E muitas vezes encontram nos brechós aquilo que não encontram mais nos shoppings”, reflete.",
  "No fim, a economista resume a essência desse novo ciclo: “Moda não é só roupa é comportamento, é economia, é cultura. E pensar de forma circular é pensar no futuro. Uma peça não termina quando deixa o cabide de alguém; ela começa outro capítulo.”",
];

export function HomePageContent() {
  return (
    <div className="space-y-10 sm:space-y-12 md:space-y-16">
      <motion.section
        className="relative h-[calc(100vh-90px)] overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <Image
            src={assetPath("/backgroundFirstSection.png")}
            alt="Editorial Cadê Meu Brechó?"
            fill
            className="object-cover object-center opacity-70 md:object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-center gap-5 px-5 py-8 text-white sm:gap-6 sm:px-6 md:gap-7 md:px-12 lg:px-16">
          <h1 className="max-w-3xl font-heading text-[1.65rem] leading-[1.15] text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.7)] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {articleHero.title}
          </h1>
          <p className="max-w-2xl text-[0.95rem] leading-relaxed text-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] sm:text-lg md:text-xl lg:text-2xl">
            {articleHero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              asChild
              className="h-12 w-full rounded-full bg-primary px-6 text-sm font-semibold shadow-lg hover:bg-primary/90 sm:h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              <Link href="/newsletter" prefetch={false}>Ver Newsletters</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="h-12 w-full rounded-full border-white/70 bg-white/15 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/25 hover:text-white sm:h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              <Link href="/conteudos" prefetch={false}>Conheça o podcast</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 to-secondary/5 px-6 py-6 text-center md:rounded-3xl md:px-8 md:py-8"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
          matérias publicadas
        </span>
        <h2 className="mt-2 font-heading text-2xl text-primary-foreground md:text-3xl">
          Confira abaixo nossos conteúdos editoriais
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Reportagens e análises sobre moda circular em Curitiba
        </p>
      </motion.div>

      <motion.section
        id="reportagem"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="grid gap-8 rounded-3xl border border-border/80 bg-white/80 px-6 py-12 shadow-sm md:px-12"
      >
        <div className="space-y-3">
          <Badge className="w-fit rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground">
            reportagem
          </Badge>
          <h3 className="font-heading text-3xl leading-tight text-primary-foreground md:text-4xl">
            Moda circular: o novo ciclo da economia que começa nos brechós de Curitiba
          </h3>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
            por Isabelle Sestari
          </p>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {realArticleContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-border/60 bg-gradient-to-br from-muted/30 to-muted/50 px-6 py-8 text-center md:px-12"
      >
        <h3 className="font-heading text-2xl text-primary-foreground md:text-3xl">
          Novas matérias em breve
        </h3>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Estamos preparando mais conteúdos sobre moda circular em Curitiba.
        </p>
      </motion.div>
    </div>
  );
}

