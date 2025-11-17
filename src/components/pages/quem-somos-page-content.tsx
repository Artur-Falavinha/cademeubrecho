"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Isabelle Sestari",
    image: assetPath("/fotoisabellesestari.jpg"),
    bio: "Bio em construção. Espaço reservado para contar a história, trajetória e o olhar da idealizadora sobre moda circular.",
  },
  {
    name: "Daniela de Gois",
    image: assetPath("/fotodanieladegois.jpg"),
    bio: "Bio em construção. Espaço dedicado para compartilhar experiências e a conexão com brechós curitibanos.",
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
    image: "",
    bio: "Bio em construção. Este espaço será preenchido com a narrativa da idealizadora e sua visão sobre moda consciente.",
  },
  {
    name: "Sabrina Gomes",
    image: assetPath("/fotosabrinagomes.png"),
    bio: "Bio em construção. Reserve este espaço para destacar a jornada e a paixão por moda sustentável.",
  },
];

export function QuemSomosPageContent() {
  return (
    <div className="space-y-8">
      <motion.section
        className="space-y-4 rounded-3xl border border-border/80 bg-white/90 px-4 py-6 shadow-sm sm:px-6 sm:py-8 md:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-secondary-foreground/60">
          idealizadoras do projeto
        </span>
        <h1 className="font-heading text-3xl leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
          Quem impulsiona o movimento Cadê Meu Brechó?
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base md:text-lg">
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
            <Card className="h-full overflow-hidden border-border/70 bg-white/80 shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-muted/10 to-muted/30 p-0 sm:h-80">
                {member.image ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      fill
                      className="object-cover object-[center_20%]"
                      priority={index < 2}
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/15 text-5xl font-bold uppercase text-primary-foreground">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-2 px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="font-heading text-xl text-primary-foreground sm:text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground sm:text-base">{member.bio}</CardDescription>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </section>
    </div>
  );
}

