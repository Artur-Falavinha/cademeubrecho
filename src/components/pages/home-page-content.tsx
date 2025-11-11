"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

const featuredArticles = [
  {
    slug: "moda-circular-brechos-curitiba",
    title: "Moda circular: o novo ciclo da economia que começa nos brechós de Curitiba",
    author: "Isabelle Sestari",
    image: "/fotoisabellesestari.jpg",
    excerpt:
      "Nas ruas de Curitiba, uma revolução silenciosa acontece entre araras coloridas, tecidos reformados e peças com histórias passadas de geração em geração.",
    category: "Reportagem",
    isReal: true,
  },
  {
    slug: "guia-curadoria-brechos",
    title: "Guia visual: 8 brechós curitibanos com curadoria afetiva para visitar já",
    author: "Equipe Cadê Meu Brechó?",
    image: "/backgroundFirstSection.png",
    excerpt:
      "Do centro histórico ao Batel: mapeamos espaços com fotografia impecável, cafés integrados e experiências que unem moda, cultura e sustentabilidade.",
    category: "Guia",
    isReal: false,
  },
  {
    slug: "roteiro-garimpo-futuro",
    title: "Como garimpar peças-desejo e prolongar ciclos: roteiro para vestir o futuro",
    author: "Equipe Cadê Meu Brechó?",
    image: "/textoLogo.png",
    excerpt:
      "Do primeiro olhar ao cuidado pós-compra, um passo a passo para transformar qualquer visita ao brechó em descoberta afetiva e consciente.",
    category: "Feature",
    isReal: false,
  },
];

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
    <div className="space-y-16">
      <motion.section
        className="relative overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/backgroundFirstSection.png"
            alt="Editorial Cadê Meu Brechó?"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-primary/30 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col gap-6 px-6 py-16 text-white md:px-12 lg:px-16">
          <div className="w-fit rounded-full bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.5em] text-white shadow-lg backdrop-blur">
            {articleHero.highlight}
          </div>
          <h1 className="max-w-3xl font-heading text-4xl leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] md:text-5xl lg:text-6xl">
            {articleHero.title}
          </h1>
          <p className="max-w-2xl text-lg text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] md:text-xl">
            {articleHero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="rounded-full bg-primary px-6 py-2 text-primary-foreground shadow-lg hover:bg-primary/90"
            >
              <Link href="/newsletter">Assine a newsletter</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-white/60 bg-white/10 px-6 py-2 text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <Link href="/conteudos">Conheça o podcast</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <section className="space-y-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
              matérias em destaque
            </span>
            <h2 className="font-heading text-3xl text-primary-foreground md:text-4xl">
              Circularidade em pauta
            </h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Um recorte editorial com foco em moda sustentável, comportamento e o
            impacto dos brechós curitibanos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              className={index === 0 ? "md:col-span-2" : ""}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="group h-full overflow-hidden border-border/80 shadow-sm transition-shadow hover:shadow-xl">
                <CardHeader className="relative h-64 overflow-hidden p-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex flex-col gap-2">
                    <Badge className="w-fit rounded-full bg-secondary/90 px-4 py-1 text-xs font-semibold text-secondary-foreground uppercase tracking-wide">
                      {article.category}
                    </Badge>
                    {article.isReal ? (
                      <Badge variant="secondary" className="w-fit rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-foreground">
                        reportagem real
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="w-fit rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        layout placeholder
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-6 py-6">
                  <h3 className="font-heading text-2xl text-primary-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-border/60 bg-muted/30 px-6 py-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {article.author}
                  </span>
                  {article.isReal ? (
                    <Link
                      href="#reportagem"
                      className="text-sm font-medium text-primary-foreground transition-colors hover:text-primary"
                    >
                      Ler matéria completa →
                    </Link>
                  ) : (
                    <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">em breve</span>
                  )}
                </CardFooter>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

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
    </div>
  );
}

