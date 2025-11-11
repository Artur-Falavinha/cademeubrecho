"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Introdução",
    paragraphs: [
      "Esta Política de Privacidade descreve como o Cadê Meu Brechó? coleta, utiliza e protege dados pessoais em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).",
      "Nosso objetivo é garantir transparência e segurança na gestão das informações fornecidas pelas pessoas que acessam nosso conteúdo editorial, newsletter, podcast, canais sociais e formulários.",
    ],
  },
  {
    title: "Quais dados coletamos",
    paragraphs: [
      "Coletamos apenas os dados necessários para a execução de nossas atividades:",
      "• Dados de contato: nome e endereço de e-mail informados voluntariamente nos formulários da newsletter ou em parcerias editoriais.",
      "• Dados de navegação: informações anônimas de acesso ao site para análises de audiência e melhorias de experiência, quando aplicável.",
    ],
  },
  {
    title: "Como utilizamos os dados",
    paragraphs: [
      "Os dados coletados são utilizados para:",
      "• Envio da newsletter editorial, com matérias, convites e novidades sobre moda circular.",
      "• Comunicação direta com leitoras, brechós parceiros e imprensa.",
      "• Produção de estatísticas agregadas e sem identificação individual, para aprimorar nosso conteúdo.",
    ],
  },
  {
    title: "Compartilhamento de informações",
    paragraphs: [
      "Não comercializamos dados pessoais. O compartilhamento ocorre apenas quando:",
      "• Necessário para cumprir obrigações legais ou ordens de autoridades competentes.",
      "• Exigido por parceiros que prestam serviços essenciais (como plataformas de envio de e-mail), sempre sob contrato e em conformidade com a LGPD.",
    ],
  },
  {
    title: "Direitos das pessoas titulares",
    paragraphs: [
      "Você pode solicitar a qualquer momento:",
      "• Confirmação da existência de tratamento de dados;",
      "• Acesso ou correção de dados incompletos, inexatos ou desatualizados;",
      "• Anonimização, bloqueio ou eliminação de dados desnecessários;",
      "• Portabilidade para outro fornecedor de serviço, mediante requisição expressa;",
      "• Revogação do consentimento, com impacto apenas nos tratamentos baseados nessa hipótese legal.",
    ],
  },
  {
    title: "Retenção e segurança",
    paragraphs: [
      "Mantemos os dados pessoais pelo tempo necessário ao cumprimento das finalidades previstas, observando obrigações legais ou regulatórias.",
      "Aplicamos medidas técnicas e administrativas de segurança para proteger informações contra acessos não autorizados, perda ou alteração indevida.",
    ],
  },
  {
    title: "Contato do encarregado",
    paragraphs: [
      "Para exercer direitos, esclarecer dúvidas ou apresentar solicitações sobre proteção de dados, escreva para:",
      "• E-mail: privacidade@cademeubrecho.com.br",
      "Responderemos em até 15 dias úteis, conforme previsto pela LGPD.",
    ],
  },
  {
    title: "Atualizações desta política",
    paragraphs: [
      "Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças legais ou novas práticas adotadas pelo Cadê Meu Brechó?.",
      "A versão mais recente estará sempre disponível neste endereço, com a data de última atualização indicada abaixo.",
      "Última atualização: novembro de 2025.",
    ],
  },
];

export function PoliticaPrivacidadePageContent() {
  return (
    <motion.article
      className="space-y-12 rounded-3xl border border-border/80 bg-white/90 px-6 py-12 shadow-sm md:px-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
          política de privacidade
        </span>
        <h1 className="font-heading text-4xl leading-tight text-primary-foreground md:text-5xl">
          Transparência sobre o uso dos seus dados
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
          Prezamos pela proteção dos dados pessoais de nossas leitoras, parceiros e colaboradoras. Conheça abaixo as diretrizes
          que orientam a gestão das informações coletadas pelo Cadê Meu Brechó?.
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="font-heading text-2xl text-primary-foreground">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </motion.article>
  );
}

