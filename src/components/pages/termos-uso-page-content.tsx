"use client";

import { motion } from "framer-motion";

const clauses = [
  {
    title: "1. Aceitação dos termos",
    paragraphs: [
      "Ao acessar o site, podcast no Spotify, canal no YouTube, comunidade no WhatsApp ou quaisquer outros conteúdos do Cadê Meu Brechó?, você declara ter lido, compreendido e concordado com as condições estabelecidas nestes Termos de Uso.",
      "Caso não concorde com algum ponto, recomendamos interromper o uso dos nossos serviços.",
    ],
  },
  {
    title: "2. Objetivo do projeto",
    paragraphs: [
      "O Cadê Meu Brechó? é uma iniciativa editorial dedicada a mapear brechós de Curitiba, divulgar conteúdos sobre moda circular e promover o consumo consciente através de site, podcast no Spotify, canal no YouTube e comunidade no WhatsApp.",
      "Todo o material produzido tem caráter informativo, cultural e educativo, sem vínculo com comercialização direta de produtos.",
    ],
  },
  {
    title: "3. Conteúdo editorial e propriedade intelectual",
    paragraphs: [
      "Textos, imagens, vídeos, áudios de podcast e demais conteúdos publicados no site, Spotify, YouTube e WhatsApp são de autoria do Cadê Meu Brechó? ou de parceiros devidamente creditados.",
      "É permitido compartilhar trechos citando a fonte e o link original. Reproduções integrais, adaptações ou usos comerciais dependem de autorização prévia e expressa.",
    ],
  },
  {
    title: "4. Participação de usuárias e parceiros",
    paragraphs: [
      "Contribuições enviadas por leitoras, brechós, marcas ou especialistas podem ser publicadas mediante curadoria editorial, sempre com a devida identificação da autoria.",
      "Ao enviar materiais, a pessoa colaboradora garante possuir os direitos necessários para publicação e concede licença gratuita para uso no site, podcast, YouTube, WhatsApp e demais canais do projeto.",
    ],
  },
  {
    title: "5. Plataformas externas",
    paragraphs: [
      "Utilizamos plataformas de terceiros para distribuição de conteúdo: Spotify (podcast), YouTube (vídeos) e WhatsApp (comunidade). Ao acessar esses canais, você está sujeito aos termos de uso e políticas de privacidade de cada plataforma.",
      "Podemos indicar links de brechós parceiros e outros sites relacionados à moda circular. O Cadê Meu Brechó? não se responsabiliza pelo conteúdo, políticas ou práticas desses sites externos.",
    ],
  },
  {
    title: "6. Formulários e contato",
    paragraphs: [
      "O contato conosco pode ser feito através do formulário no site ou diretamente pelo e-mail contato.cademeubrecho@gmail.com.",
      "Dados pessoais fornecidos são tratados conforme nossa Política de Privacidade e a legislação vigente.",
    ],
  },
  {
    title: "7. Limitação de responsabilidade",
    paragraphs: [
      "Embora busquemos informações atualizadas e verificadas, não garantimos que todos os dados estejam sempre completos ou livres de erros.",
      "O uso das informações divulgadas é de responsabilidade da pessoa usuária, que deve avaliar a adequação ao seu contexto.",
    ],
  },
  {
    title: "8. Alterações nos termos",
    paragraphs: [
      "Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento, mediante publicação da versão atualizada neste endereço.",
      "A continuidade de acesso após mudanças implica concordância com as novas condições.",
    ],
  },
  {
    title: "9. Contato",
    paragraphs: [
      "Em caso de dúvidas sobre estes termos, escreva para contato.cademeubrecho@gmail.com.",
      "Última atualização: novembro de 2025.",
    ],
  },
];

export function TermosUsoPageContent() {
  return (
    <motion.article
      className="space-y-12 rounded-3xl border border-white/50 bg-white/98 px-6 py-12 shadow-sm md:px-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-secondary-foreground/70">
          termos de uso
        </span>
        <h1 className="font-heading text-4xl leading-tight text-foreground md:text-5xl">
          Condições para utilizar nossos conteúdos
        </h1>
        <p className="max-w-3xl text-base text-foreground/70 md:text-lg">
          Estes Termos de Uso norteiam a relação entre o Cadê Meu Brechó? e as pessoas que acessam o site, podcast, YouTube, WhatsApp
          ou participam dos nossos projetos editoriais.
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-foreground/70 md:text-base">
        {clauses.map((clause) => (
          <section key={clause.title} className="space-y-3">
            <h2 className="font-heading text-2xl text-foreground">{clause.title}</h2>
            {clause.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </motion.article>
  );
}

