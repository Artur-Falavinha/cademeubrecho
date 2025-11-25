"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Music3, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const contentChannels = [
  {
    title: "Podcast no Spotify",
    description:
      "Entrevistas, bastidores e relatos sobre moda circular com quem transforma o mercado curitibano.",
    href: "https://open.spotify.com/show/63eFvDzN0ZItGM0AUF8fSe?si=h0DWLS-NRPKmJFbWwjji_A",
    icon: Music3,
    accent: "bg-primary/15 text-foreground",
  },
  {
    title: "Série visual no YouTube",
    description:
      "Vídeos inspirados em editoriais de moda e documentários curtos sobre os brechós mais criativos da cidade.",
    href: "https://www.youtube.com/@Cad%C3%AAmeuBrech%C3%B3",
    icon: Youtube,
    accent: "bg-secondary/20 text-secondary-foreground",
  },

];

export function ConteudosPageContent() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <motion.section
        className="rounded-2xl border border-white/50 bg-white/98 px-5 py-8 shadow-sm sm:px-6 sm:py-10 md:rounded-3xl md:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-4 sm:space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
            cadê meu brechó – podcast e conteúdos exclusivos
          </span>
          <h1 className="font-heading text-4xl leading-tight text-foreground md:text-5xl">
            Conteúdos que vestem propósito
          </h1>
          <p className="text-base text-foreground/70 md:text-lg">
            Histórias, entrevistas e experiências que mostram o impacto da moda circular em Curitiba. Acompanhe episódios com
            especialistas, visitas guiadas aos brechós e conversas ao vivo com quem faz este movimento acontecer.
          </p>
        </div>

      </motion.section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-2 bg-transparent">
        {contentChannels.map((channel, index) => (
          <motion.article
            key={channel.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="!gap-0 !py-0 flex h-full flex-col overflow-hidden border-white/50 bg-white/98 shadow-xl border border-white/50 shadow-sm  ">
              <CardHeader className="space-y-3 pt-6 sm:space-y-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${channel.accent}`}>
                  <channel.icon className="h-5 w-5" />
                </div>
                <CardTitle className="font-heading text-2xl text-foreground">{channel.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <CardDescription className="text-base text-foreground/70">
                  {channel.description}
                </CardDescription>
              </CardContent>
              <div className="mt-auto border-t border-white/50 bg-muted/40 p-6">
                <Button
                  asChild
                  className="w-full justify-between rounded-full bg-primary text-foreground hover:bg-primary/90"
                >
                  <Link href={channel.href} target="_blank" rel="noreferrer">
                    Acessar
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.article>
        ))}
      </section>
    </div>
  );
}

