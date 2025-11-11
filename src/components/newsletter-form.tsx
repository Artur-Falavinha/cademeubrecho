"use client";

import { useMemo, useState } from "react";
import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

type SubmissionState = "idle" | "loading" | "success" | "error" | "missing";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [acceptedLgpd, setAcceptedLgpd] = useState(false);
  const [status, setStatus] = useState<SubmissionState>("idle");
  const formId = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
    [],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!acceptedLgpd) {
      setStatus("error");
      return;
    }

    if (!formId) {
      setStatus("missing");
      return;
    }

    try {
      setStatus("loading");
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setAcceptedLgpd(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-border/80 bg-white/90 p-6 shadow-sm md:p-10"
    >
      <div className="space-y-3 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
          assine nossa newsletter
        </span>
        <h2 className="font-heading text-3xl text-primary-foreground md:text-4xl">
          Receba matérias, novidades e histórias sobre moda circular em Curitiba.
        </h2>
        <p className="text-sm text-muted-foreground md:text-base">
          Um e-mail quinzenal com reportagens, agenda de eventos, garimpos especiais e bastidores do projeto.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr] md:items-end">
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Digite seu melhor e-mail"
          required
          className="h-12 rounded-full border border-border/80 bg-white px-6 text-base shadow-sm"
        />
        <Button
          type="submit"
          className="h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Inscrever-se"
          )}
        </Button>
      </div>

      <label className="flex items-start gap-3 text-left text-sm text-muted-foreground">
        <Checkbox
          checked={acceptedLgpd}
          onCheckedChange={(checked) => setAcceptedLgpd(Boolean(checked))}
          className="mt-1 border-border/80"
          required
        />
        Li e aceito os{" "}
        <a
          href="/termos-de-uso"
          className="font-semibold text-primary-foreground underline-offset-4 hover:underline"
        >
          Termos de Uso
        </a>{" "}
        e a{" "}
        <a
          href="/politica-de-privacidade"
          className="font-semibold text-primary-foreground underline-offset-4 hover:underline"
        >
          Política de Privacidade
        </a>{" "}
        (LGPD).
      </label>

      {status === "success" && (
        <div className="flex items-center gap-3 rounded-2xl bg-secondary/30 px-4 py-3 text-sm text-secondary-foreground">
          <Check className="h-4 w-4" />
          Inscrição realizada com sucesso! Confirme seu e-mail para receber os conteúdos.
        </div>
      )}

      {status === "error" && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Não foi possível enviar sua inscrição. Confira os campos e tente novamente.
        </p>
      )}

      {status === "missing" && (
        <p className="rounded-2xl bg-yellow-50 px-4 py-3 text-sm text-yellow-900">
          Configure o identificador do Formspree adicionando a variável de ambiente <code className="font-mono">NEXT_PUBLIC_FORMSPREE_FORM_ID</code> antes do deploy.
        </p>
      )}
    </form>
  );
}

