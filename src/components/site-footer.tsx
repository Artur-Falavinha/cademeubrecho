import Link from "next/link";

import { Mail, Youtube, MessageCircle, Music3 } from "lucide-react";

const links = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: Youtube,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/",
    icon: Music3,
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VbBaSRE0VycCjdDdNX3I",
    icon: MessageCircle,
  },
  {
    label: "E-mail",
    href: "mailto:contato@cademeubrecho.com.br",
    icon: Mail,
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-white/50 bg-white/98 shadow-xl">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-4 py-10 md:px-6 lg:px-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground/70">
              movimento editorial
            </span>
            <h2 className="font-heading text-3xl leading-snug text-primary-foreground md:text-4xl">
              Cadê Meu Brechó? é a curadoria de moda circular que nasce em Curitiba.
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Conteúdos, podcasts, newsletters e um guia completo de brechós para transformar seu jeito de consumir moda com propósito.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary hover:bg-primary/10"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Cadê Meu Brechó?. Produzido por idealizadoras curitibanas.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/politica-de-privacidade" prefetch={false} className="hover:text-primary-foreground">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" prefetch={false} className="hover:text-primary-foreground">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

