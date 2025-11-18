"use client";

import { motion } from "framer-motion";

const clauses = [
  {
    title: "1. Aceitação dos termos",
    paragraphs: [
      "Ao acessar o site, newsletter, podcast ou quaisquer outros conteúdos do Cadê Meu Brechó?, você declara ter lido, compreendido e concordado com as condições estabelecidas nestes Termos de Uso.",
      "Caso não concorde com algum ponto, recomendamos interromper o uso dos nossos serviços.",
    ],
  },
  {
    title: "2. Objetivo do projeto",
    paragraphs: [
      "O Cadê Meu Brechó? é uma iniciativa editorial dedicada a mapear brechós de Curitiba, divulgar conteúdos sobre moda circular e promover o consumo consciente.",
      "Todo o material produzido tem caráter informativo, cultural e educativo, sem vínculo com comercialização direta de produtos.",
    ],
  },
  {
    title: "3. Conteúdo editorial e propriedade intelectual",
    paragraphs: [
      "Textos, imagens, vídeos, áudios e demais conteúdos publicados são de autoria do Cadê Meu Brechó? ou de parceiros devidamente creditados.",
      "É permitido compartilhar trechos citando a fonte e o link original. Reproduções integrais, adaptações ou usos comerciais dependem de autorização prévia e expressa.",
    ],
  },
  {
    title: "4. Participação de usuárias e parceiros",
    paragraphs: [
      "Contribuições enviadas por leitoras, brechós, marcas ou especialistas podem ser publicadas mediante curadoria editorial, sempre com a devida identificação da autoria.",
      "Ao enviar materiais, a pessoa colaboradora garante possuir os direitos necessários para publicação e concede licença gratuita para uso no site, newsletter e redes do projeto.",
    ],
  },
  {
    title: "5. Newsletter e formulários",
    paragraphs: [
      "O cadastro na newsletter requer consentimento expresso para receber comunicações periódicas. O cancelamento pode ser feito a qualquer momento pelos links do e-mail ou por solicitação direta.",
      "Dados pessoais são tratados conforme nossa Política de Privacidade e a legislação vigente.",
    ],
  },
  {
    title: "6. Links externos",
    paragraphs: [
      "Podemos indicar links de terceiros, como brechós parceiros, plataformas de podcast ou redes sociais. O Cadê Meu Brechó? não se responsabiliza pelo conteúdo, políticas ou práticas desses sites.",
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
      "Em caso de dúvidas sobre estes termos, escreva para contato@cademeubrecho.com.br.",
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
          Estes Termos de Uso norteiam a relação entre o Cadê Meu Brechó? e as pessoas que acessam o site, consomem a newsletter
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

