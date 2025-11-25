"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Isabelle Sestari",
    image: assetPath("/fotoisabellesestari.jpg"),
    bio: "Acredito que comunicação e moda são intrinsecamente conectadas: nos comunicamos também pelo que vestimos, e cada peça carrega uma história. Por isso, fez sentido unir esses dois universos neste projeto, explorando como brechós, tendências e narrativas visuais dialogam entre si. A partir dessa interseção, busco compreender e contar histórias que começam no guarda-roupa, mas reverberam muito além dele.",
  },
  {
    name: "Daniela de Gois",
    image: assetPath("/fotodanieladegois.jpg"),
    bio: "Foi pela comunicação que a moda começou a fazer parte da minha vida de um jeito leve e quase imperceptível. Muito antes de imaginar que isso poderia se tornar uma profissão, eu já observava tendências, escrevia sobre o que me inspirava e me encantava com cada detalhe desse universo. Com o tempo, meu interesse só cresceu, especialmente pela moda circular, que abriu em mim um novo olhar mais atento, consciente e questionador sobre a forma como consumimos.",
  },
  {
    name: "Isadora Lopes",
    image: assetPath("/fotoisadoralopes.png"),
    bio: "Apaixonada pela arte, comecei a gostar de moda há pouco tempo, mas a cada dia que passa sinto uma conexão com ela. Acredito que minha comunicação já abriu muitas portas, e continuará abrindo cada vez mais.",
  },
  {
    name: "Larissa Witte",
    image: assetPath("/fotolarissawitte.jpg"),
    bio: "Apaixonada pelo mundo esportivo e frequentadora de brechós desde a infância, comecei a me interessar pela moda há pouco tempo. Com a comunicação, consegui ver as várias possibilidades de misturar ambos os mundos, tanto o da moda quanto o do esporte. Então, na maioria das vezes, você vai me ver usando algo relacionado ao automobilismo ou ao futebol.",
  },
  {
    name: "Julia Nunes Budal",
    image: assetPath("/fotojuliabudal.jpg"),
    bio: "Como estudante de jornalismo, uso a comunicação para aproximar mais pessoas desse universo. Sou apaixonada por garimpos, histórias e roupas que circulam, e acredito que consumir de forma consciente é também uma forma de cuidar da cidade e das pessoas. Meu trabalho une informação, criatividade e propósito para transformar nossa relação com a moda.",
  },
  {
    name: "Sabrina Gomes",
    image: assetPath("/fotosabrinagomes.png"),
    bio: "Jornalismo nunca foi o meu sonho, mesmo que eu sempre tenha sido apaixonada por textos, poemas e histórias. Do amor pelos livros, uma pesquisa rápida no Google me levou ao início dessa jornada na comunicação. Aqui, eu me encontrei, me tornei a minha melhor versão e passei a entender o que realmente é lutar por um sonho. A paixão por ser jornalista e produtora veio aos poucos — e ficou.",
  },
];

export function QuemSomosPageContent() {
  return (
    <div className="space-y-8">
      <motion.section
        className="space-y-4 rounded-3xl border border-white/50 bg-white/98 px-4 py-6 shadow-sm sm:px-6 sm:py-8 md:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-secondary-foreground/60">
          idealizadoras do projeto
        </span>
        <h1 className="font-heading text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          Quem impulsiona o movimento Cadê Meu Brechó
        </h1>
        <p className="max-w-3xl text-sm text-foreground/70 sm:text-base md:text-lg">
          Somos um coletivo de comunicadoras, pesquisadoras e criadoras que acreditam no poder transformador da moda circular
          em Curitiba. Aqui está o espaço destinado para bios completas que conectam cada idealizadora
          aos brechós da cidade.
        </p>
      </motion.section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <Card className="h-full border-none bg-white/98 shadow-xl !py-0 !gap-0 overflow-hidden">
              <CardHeader className="flex h-80 items-center justify-center overflow-hidden p-0 rounded-t-3xl">
                {member.image ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/15 text-5xl font-bold uppercase text-foreground">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-2 px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="font-heading text-xl text-foreground sm:text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-sm text-foreground/70 sm:text-base">{member.bio}</CardDescription>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </section>
    </div>
  );
}

