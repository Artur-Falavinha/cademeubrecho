"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Introdução",
    paragraphs: [
      "Esta Política de Privacidade descreve como o Cadê Meu Brechó? coleta, utiliza e protege dados pessoais em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).",
      "Nosso objetivo é garantir transparência e segurança na gestão das informações fornecidas pelas pessoas que acessam nosso site, podcast no Spotify, canal no YouTube, comunidade no WhatsApp e demais canais de comunicação.",
    ],
  },
  {
    title: "Quais dados coletamos",
    paragraphs: [
      "O Cadê Meu Brechó? não possui banco de dados próprio e não armazena informações pessoais dos usuários em nossos servidores.",
      "• Contato direto: quando você envia um e-mail para contato.cademeubrecho@gmail.com, suas informações ficam armazenadas apenas na plataforma Gmail, regida pela política de privacidade do Google.",
      "• Navegação no site: o site é estático e hospedado no GitHub Pages. Não coletamos, rastreamos ou armazenamos dados de navegação dos visitantes.",
      "• Plataformas externas: ao acessar nosso podcast no Spotify, canal no YouTube ou comunidade no WhatsApp, quaisquer dados coletados são gerenciados exclusivamente por essas plataformas, conforme suas respectivas políticas de privacidade.",
    ],
  },
  {
    title: "Como utilizamos os dados",
    paragraphs: [
      "Como não armazenamos dados pessoais:",
      "• E-mails recebidos em contato.cademeubrecho@gmail.com são utilizados exclusivamente para responder solicitações de contato, parcerias e propostas editoriais.",
      "• Não realizamos rastreamento de usuários, análises de comportamento ou coleta de estatísticas de navegação.",
      "• Todo o conteúdo do site é público e acessível sem necessidade de cadastro ou fornecimento de dados pessoais.",
    ],
  },
  {
    title: "Compartilhamento de informações",
    paragraphs: [
      "Como não coletamos ou armazenamos dados pessoais:",
      "• Não comercializamos, compartilhamos ou transferimos dados de usuários.",
      "• E-mails enviados para contato.cademeubrecho@gmail.com são gerenciados pelo Gmail/Google, conforme suas políticas de privacidade.",
      "• O GitHub Pages (hospedagem do site) pode coletar dados técnicos de acesso, conforme suas próprias políticas.",
      "• Ao utilizar plataformas externas (Spotify, YouTube, WhatsApp), você está sujeito às políticas de privacidade dessas empresas.",
    ],
  },
  {
    title: "Seus direitos",
    paragraphs: [
      "Como não coletamos ou armazenamos dados pessoais em nosso site:",
      "• Não há dados para acessar, corrigir ou excluir em nossos sistemas.",
      "• Caso tenha enviado e-mails para contato.cademeubrecho@gmail.com e deseje que sejam excluídos, entre em contato conosco.",
      "• Para exercer direitos relacionados a dados coletados por plataformas externas (Spotify, YouTube, WhatsApp, Google), você deve contatar diretamente essas empresas.",
    ],
  },
  {
    title: "Segurança e armazenamento",
    paragraphs: [
      "Como não mantemos banco de dados ou armazenamos informações pessoais:",
      "• Não há risco de vazamento de dados a partir do nosso site, pois nenhuma informação pessoal é coletada ou armazenada por nós.",
      "• O site é estático e hospedado no GitHub Pages, que possui suas próprias medidas de segurança.",
      "• E-mails enviados para contato.cademeubrecho@gmail.com são protegidos pelas medidas de segurança do Google.",
    ],
  },
  {
    title: "Contato para questões de privacidade",
    paragraphs: [
      "Para exercer direitos, esclarecer dúvidas ou apresentar solicitações sobre proteção de dados, escreva para:",
      "• E-mail: contato.cademeubrecho@gmail.com",
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
      className="space-y-12 rounded-3xl border border-white/50 bg-white/98 px-6 py-12 shadow-sm md:px-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
          política de privacidade
        </span>
        <h1 className="font-heading text-4xl leading-tight text-foreground md:text-5xl">
          Transparência sobre o uso dos seus dados
        </h1>
        <p className="max-w-3xl text-base text-foreground/70 md:text-lg">
          Prezamos pela proteção dos dados pessoais de nossas leitoras, parceiros e colaboradoras. Conheça abaixo as diretrizes
          que orientam a gestão das informações coletadas pelo Cadê Meu Brechó?.
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-foreground/70 md:text-base">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="font-heading text-2xl text-foreground">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </motion.article>
  );
}

