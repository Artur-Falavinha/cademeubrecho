"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle, Music3, Phone, Youtube } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const contactChannels = [
  {
    label: "E-mail",
    href: "mailto:contato@cademeubrecho.com.br",
    description: "Para parcerias, imprensa e projetos especiais, escreva para nosso time editorial.",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    description: "Editorial visual, bastidores das produções e agenda de eventos presenciais.",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    description: "Documentários curtos, entrevistas e séries exclusivas sobre moda circular curitibana.",
    icon: Youtube,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/",
    description: "Podcast quinzenal com entrevistas, trends e conversas sobre consumo consciente.",
    icon: Music3,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    description: "Canal direto com alertas de garimpo, drops de conteúdo e convites para encontros.",
    icon: MessageCircle,
  },
  {
    label: "Telefone",
    href: "tel:+5541999999999",
    description: "Atendimento durante eventos e plantões especiais.",
    icon: Phone,
  },
];

export function ContatoPageContent() {
  return (
    <div className="space-y-16">
      <motion.section
        className="space-y-6 rounded-3xl border border-border/80 bg-white/90 px-6 py-12 shadow-sm md:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
          cadê meu brechó? – contato
        </span>
        <h1 className="font-heading text-4xl leading-tight text-primary-foreground md:text-5xl">
          Fale com nossas idealizadoras
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
          Conectamos marcas, brechós, movimentos sociais e apaixonados por moda circular. Escreva para a equipe editorial,
          acompanhe nossas redes e participe da comunidade que transforma o consumo em Curitiba.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-secondary/10 p-6 text-secondary-foreground">
            <Badge className="mb-4 rounded-full bg-secondary px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
              sede criativa
            </Badge>
            <div className="flex items-start gap-3 text-sm md:text-base">
              <MapPin className="mt-1 h-5 w-5" />
              <p>
                Curitiba • Paraná <br />
                Centro histórico e polos criativos
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-primary/10 p-6 text-primary-foreground">
            <Badge className="mb-4 rounded-full bg-primary px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-foreground">
              horário editorial
            </Badge>
            <p className="text-sm md:text-base">
              Segunda a sexta, das 9h às 18h, com cobertura de eventos e garimpos especiais aos sábados.
            </p>
          </div>
          <div className="rounded-3xl border border-border/80 bg-white p-6 text-primary-foreground shadow-sm">
            <Badge className="mb-4 rounded-full bg-muted px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              conteúdo
            </Badge>
            <p className="text-sm md:text-base">
              Quer sugerir pauta, compartilhar um case ou indicar um brechó? Envie seu release para nosso e-mail oficial.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl text-primary-foreground md:text-4xl">
            Nossos canais
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            Cada plataforma tem um papel no ecossistema Cadê Meu Brechó?. Escolha o canal ideal para conversar com a equipe,
            consumir conteúdo exclusivo e acompanhar os bastidores do movimento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contactChannels.map((channel, index) => (
            <motion.article
              key={channel.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full border-border/70 bg-white/85 shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary-foreground">
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <CardTitle className="font-heading text-2xl text-primary-foreground">
                        {channel.label}
                      </CardTitle>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                        contato oficial
                      </p>
                    </div>
                  </div>
                  <Link
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm font-semibold text-primary-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    Acessar canal
                  </Link>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {channel.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/80 bg-white/90 px-6 py-10 shadow-sm md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
              press kit & parcerias
            </span>
            <h3 className="font-heading text-3xl text-primary-foreground md:text-4xl">
              Agende uma conversa com nossa editoria
            </h3>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Estamos disponíveis para entrevistas, pautas colaborativas, projetos educacionais e experiências imersivas em
              brechós de Curitiba. Conte com nosso olhar editorial para narrativas sobre moda sustentável.
            </p>
          </div>
          <div className="h-24 w-px bg-border md:h-32" aria-hidden>
            <Separator orientation="vertical" className="hidden h-full w-px bg-border md:block" />
          </div>
          <div className="space-y-3 rounded-3xl bg-primary/10 p-6 text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.35em]">contato direto</p>
            <Link
              href="mailto:contato@cademeubrecho.com.br"
              className="block text-lg font-semibold underline-offset-4 hover:underline"
            >
              contato@cademeubrecho.com.br
            </Link>
            <Link href="tel:+5541999999999" className="block text-sm font-medium hover:underline">
              +55 (41) 9 9999-9999
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

