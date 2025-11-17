"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { assetPath } from "@/lib/assetPath";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Início", href: "/" },
  { title: "Quem Somos", href: "/quem-somos" },
  { title: "Conteúdos", href: "/conteudos" },
  { title: "Newsletter", href: "/newsletter" },
  { title: "Glossário", href: "/glossario" },
  { title: "Contato", href: "/contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-4 py-4 md:px-6 lg:px-14">
        <Link href="/" className="flex items-center gap-4" onClick={() => setIsOpen(false)}>
          <div className="relative h-9 w-36 md:h-10 md:w-40">
            <Image
              src={assetPath("/textoLogo.png")}
              alt="Cadê Meu Brechó?"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav
          className={cn(
            "absolute left-0 right-0 top-full border-b border-border bg-white px-4 pb-4 pt-2 shadow-sm transition-all duration-300 md:static md:flex md:border-none md:bg-transparent md:p-0 md:shadow-none",
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100",
          )}
        >
          <ul className="flex flex-col items-stretch gap-1 md:flex-row md:items-center md:gap-6">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group inline-flex w-full items-center justify-between rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                      "md:px-0 md:py-0 md:text-base md:font-semibold",
                      isActive
                        ? "text-primary-foreground md:text-primary-foreground"
                        : "text-muted-foreground hover:text-primary-foreground",
                    )}
                  >
                    <span>{item.title}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary-foreground opacity-0 transition-all group-hover:opacity-100 md:hidden">
                      ver
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="sm"
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary-foreground transition-transform active:scale-95 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Alternar menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn(
              "h-5 w-5 transition-transform",
              isOpen ? "rotate-45" : "rotate-0",
            )}
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6.75h15M4.5 12h15m-9 5.25h9"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}

