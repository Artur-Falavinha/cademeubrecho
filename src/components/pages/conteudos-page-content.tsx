"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Podcast, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";

const contentChannels = [
  {
    title: "Podcast no Spotify",
    description:
      "Entrevistas, bastidores e relatos sobre moda circular com quem transforma o mercado curitibano.",
    href: "https://open.spotify.com/",
    icon: Podcast,
    accent: "bg-primary/15 text-primary-foreground",
  },
  {
    title: "Série visual no YouTube",
    description:
      "Vídeos inspirados em editoriais de moda e documentários curtos sobre os brechós mais criativos da cidade.",
    href: "https://www.youtube.com/",
    icon: Youtube,
    accent: "bg-secondary/20 text-secondary-foreground",
  },
  {
    title: "Comunidade no WhatsApp",
    description:
      "Agenda de eventos, alertas de garimpo e conversas semanais com as idealizadoras diretamente no seu celular.",
    href: "https://wa.me/",
    icon: MessageCircle,
    accent: "bg-muted text-muted-foreground",
  },
];

export function ConteudosPageContent() {
  return (
    <div className="space-y-16">
      <motion.section
        className="grid gap-10 rounded-3xl border border-border/80 bg-white/90 px-6 py-12 shadow-sm md:grid-cols-[1.2fr,0.8fr] md:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
            cadê meu brechó? – podcast e conteúdos exclusivos
          </span>
          <h1 className="font-heading text-4xl leading-tight text-primary-foreground md:text-5xl">
            Conteúdos que vestem propósito
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Histórias, entrevistas e experiências que mostram o impacto da moda circular em Curitiba. Acompanhe episódios com
            especialistas, visitas guiadas aos brechós e conversas ao vivo com quem faz este movimento acontecer.
          </p>
          <div className="flex flex-wrap gap-4">
            {contentChannels.map((channel) => (
              <Link
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-primary"
              >
                <channel.icon className="h-4 w-4" />
                {channel.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-border/80 bg-muted">
          <VideoPlayer url="https://www.youtube.com/watch?v=f3qtk0g6F1M" />
        </div>
      </motion.section>

      <section className="grid gap-8 md:grid-cols-3">
        {contentChannels.map((channel, index) => (
          <motion.article
            key={channel.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden border-border/70 bg-white/80 shadow-sm transition-shadow hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${channel.accent}`}>
                  <channel.icon className="h-5 w-5" />
                </div>
                <CardTitle className="font-heading text-2xl text-primary-foreground">{channel.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {channel.description}
                </CardDescription>
              </CardContent>
              <div className="border-t border-border/60 bg-muted/40 px-6 py-4">
                <Button
                  asChild
                  className="w-full justify-between rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
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

