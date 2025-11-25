"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Feather, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const newsletters = [
  {
    title: "Como os brechós online estão conquistando o público jovem",
    author: "Julia Budal",
    content: [
      "Os brechós online vêm ganhando cada vez mais espaço entre o público jovem, e para entender esse movimento conversamos com quem vive essa transformação diariamente. Maria Vitória Fayad, fundadora do Maria Brechó, explica que a revolução começou quando os brechós deixaram de ser espaços considerados antigos e desorganizados para se tornarem vitrines digitais no Instagram e no WhatsApp. Em dez anos de mercado, ela viu o público migrar do Facebook para o Instagram, e percebeu que hoje a força do negócio está no online. Mesmo mantendo loja física, é nas redes sociais que acontecem as maiores vendas, impulsionadas por tráfego pago, produção constante de conteúdo e parcerias com influenciadoras que ampliam o alcance para todo o Brasil.",
      "Essa presença digital exige variedade e dinamismo. Para atrair o público mais jovem, o Maria Brechó aposta em conteúdos diversos, vídeos curtos, looks produzidos, fotos no corpo, no manequim e em flat lay, permitindo que cada cliente se identifique com um tipo de linguagem. A ideia é que o feed represente o que é o brechó na prática: um espaço plural, com peças caras e baratas, marcas conhecidas e sem marca, looks joviais e outros elegantes. Essa mistura é fundamental para criar conexão e mostrar que existe algo para todas as idades e estilos.",
      "A consumidora Leandra Caputo, de 23 anos, confirma a força das redes sociais nesse processo. Ela conta que só passou a olhar para os brechós com interesse depois de ver influenciadoras mostrando garimpos baratos, exclusivos e estilosos. Para ela e para muitos jovens, o que mais atrai é a combinação entre preço acessível, exclusividade e qualidade. Leandra sempre busca peças com bons materiais como couro, cetim, alfaiataria, porque sabe que o brechó pode oferecer itens duráveis por um valor menor. A sensação de \"encontrar uma joia\" no meio de peças usadas também pesa: o garimpo vira uma experiência única, capaz de reforçar identidade e estilo.",
      "Além disso, o estigma em torno da compra de usados diminuiu muito com plataformas como Enjoei, Repassa e marketplaces, que facilitaram o processo de compra e venda. Mesmo com taxas, a compra continua vantajosa e, para muitos jovens, vender suas próprias peças virou uma forma de girar o guarda-roupa e garantir renda extra. Para Maria, outro ponto importante é o fator humano: brechós são negócios formados por pessoas reais. Essa relação cria uma comunidade forte no Instagram, onde clientes acompanham o dia a dia, perguntam da família, vibram com conquistas e se sentem parte da história do brechó. Essa proximidade gera confiança, algo que o fast fashion não oferece.",
      "Apesar do sucesso, Maria observa que muitos brechós físicos estão reduzindo ou encerrando suas lojas para investir totalmente no digital. Já os novos empreendimentos do setor, segundo ela, nascem focados no online, com investimento em iluminação, tecnologia, criação de conteúdo e estratégias de marketing. Para Leandra, porém, é importante lembrar que a moda é cíclica, e o consumo de brechó pode ser uma tendência passageira dependendo das narrativas criadas nas redes sociais. Hoje o usado está em alta; amanhã, talvez o \"novo\" volte a ser sinônimo de status. Ainda assim, o acesso à informação transformou o mercado e permitiu que jovens encontrassem nos brechós uma forma de consumir mais livre, econômica e alinhada ao próprio estilo.",
      "No fim, o que impulsiona os brechós online entre o público jovem é a combinação entre preço, exclusividade, facilidade de compra, influência digital e conexão humana. Um ecossistema que cresce e se adapta ao ritmo das redes sociais, dinâmico, visual, diversificado e cheio de personalidade.",
    ],
  },
  {
    title: "Por que Curitiba está apaixonada pela moda de segunda mão?",
    author: "Isabelle Sestari",
    content: [
      "Curitiba está vivendo uma verdadeira revolução fashion. Brechós deixaram de ser espaços esquecidos para se tornarem destinos obrigatórios para quem busca estilo, economia e consciência. Mas afinal, quem são os consumidores dessa moda circular? E por que cada vez mais curitibanos estão preferindo roupas usadas?",
      "O que está por trás desse movimento?",
      "Segundo especialistas, três fatores explicam o crescimento da moda de segunda mão:", "- Economia: peças de qualidade, tecidos nobres e preços acessíveis.",
      "- Consciência ambiental: reduzir impactos e prolongar o ciclo de vida das roupas.", "- Cultura e estilo: moda é cíclica, e ressignificar peças é tendência criativa.",
      "Comprar em brechó não é só sobre economizar, é sobre dar significado às roupas e fazer parte de um movimento que valoriza história e sustentabilidade.",
      "Quem é o consumidor curitibano de brechó?",
      "O perfil mais comum é descolado, consciente e antenado. Essa pessoa quer saber quem fez suas roupas, se preocupa com condições de trabalho e busca peças que expressem identidade. É um público que entende que moda sustentável não é 100% possível, mas acredita no design para a sustentabilidade e na circularidade: usar, transformar, trocar e reinventar.",
      "Curitiba e seus brechós: do mofo à curadoria premium",
      "Décadas atrás, brechós eram vistos como espaços desorganizados, com peças jogadas e cheiro de mofo. Hoje, a realidade é outra: curadoria cuidadosa, peças bem conservadas e ambientes convidativos. Essa mudança atraiu um público cada vez maior e consolidou a moda de segunda mão como estilo de vida, não apenas uma tendência passageira.",
      "Mas há desafios:",
      "Preços elevados em alguns brechós, que afastam consumidores. Falta de conexão entre discurso e prática, já que muitos ainda compram fast fashion enquanto falam de sustentabilidade.",
      "O futuro da moda circular em Curitiba",
      "A tendência é clara: esse consumo vai se fortalecer. A geração jovem influencia pais e familiares, e até pessoas com mais de 70 anos estão aderindo aos brechós, buscando peças com qualidade, estética e conforto que não encontram no varejo tradicional. Além disso, cresce a ideia de reconfigurar peças e dar nova vida a excedentes de coleções, agregando valor e mantendo o componente de moda.",
      "Por que isso importa?",
      "Comprar de segunda mão não é só sobre preço: é sobre história, identidade e responsabilidade. É sobre escolher peças que duram, que carregam significado e que ajudam a construir um futuro mais sustentável para a moda.",
      "Quer descobrir onde garimpar?",
      "Acesse o App do Cadê Meu Brechó? e encontre os melhores brechós da capital paranaense para começar sua jornada na moda circular.",
    ],
  },
  {
    title: "Futuro dos Brechós: a geração consciente e a moda que se reinventa",
    author: "Julia Budal",
    content: [
      "A moda está mudando, e a nova geração tem papel fundamental nesse processo. Cada vez mais jovens estão repensando a forma de consumir e se vestir, e os brechós ocupam um lugar central nesse movimento. O que antes era sinônimo de economia e necessidade hoje se transformou em um ato de expressão, identidade e consciência coletiva.",
      "A chamada Geração Z vem ressignificando o consumo de segunda mão. Essa mudança é movida tanto por questões econômicas quanto por uma busca por autenticidade. Vestir-se, para esses jovens, não é apenas acompanhar tendências, mas construir um estilo próprio que dialogue com valores como sustentabilidade e criatividade. Em vez de seguir o ritmo acelerado da moda industrial, eles optam por um consumo mais afetivo e sustentável, e os brechós são o espaço ideal para isso.",
      "Um exemplo dessa transformação é Nath Alencar, 23 anos, criadora de conteúdo e “exploradora de brechós” em Curitiba. O interesse pela moda circular surgiu de forma espontânea, quando ela se mudou de Belém para o sul do país. “Eu cheguei em Curitiba só com roupas de calor e percebi o quanto as lojas de departamento eram inacessíveis, principalmente com roupa de frio. Comecei a garimpar por necessidade, e hoje não parei mais”, conta.",
      "O que começou como uma solução prática acabou se transformando em conteúdo digital. Nath gravou o primeiro vídeo com um roteiro de garimpo pelos brechós do centro de Curitiba, mostrando lojas, peças e dicas de compra. O vídeo viralizou e, desde então, ela segue produzindo vídeos sobre moda circular e economia criativa. “Foi tudo muito natural. Eu fiz um vídeo só pra ajudar uma amiga, e de repente vi que as pessoas queriam muito esse tipo de conteúdo”, explica.",
      "Para Nath, o brechó é um espaço de liberdade. “A galera mais nova perdeu aquele preconceito de achar que brechó é roupa velha ou suja. Hoje é o contrário: é um mar de oportunidades. Você pode ser estiloso com qualquer tipo de roupa e qualquer valor”, diz. A relação com a moda passa a ser menos sobre status e mais sobre criatividade. O luxo deixa de estar no preço e passa a estar na autenticidade de quem veste.",
      "As redes sociais têm papel essencial nesse processo. É nelas que os brechós e criadores de conteúdo se conectam com o público jovem, mostrando que é possível consumir de forma consciente sem abrir mão do estilo. No TikTok e no Instagram, vídeos de “garimpo”, provas de looks e tours por brechós locais se multiplicam. “O caminho pra alcançar o público é fazer um conteúdo que as pessoas vão salvar, que vai ser útil pra elas. Mostrar o que realmente dá pra encontrar”, afirma Nath.",
      "Essa comunicação direta e espontânea gera identificação e cria uma comunidade em torno da moda circular. O público de Nath é diverso, mas majoritariamente feminino, formado por pessoas que buscam inspiração e também informação. “Recebo mensagens de gente que diz que foi num brechó porque viu meu vídeo. As pessoas confiam nessa troca, confiam na experiência”, conta.",
      "Em Curitiba, o movimento ganha força com a abertura de brechós modernos, que investem em curadoria, decoração criativa e até cafés integrados ao espaço. Esses lugares se tornam pontos de encontro entre moda, sustentabilidade e cultura urbana. “Eu vejo que as lojas estão se adaptando pra alcançar essa galera. Tem muito espaço legal surgindo, com pegada jovem e criativa. A moda tá se reinventando porque precisa”, diz Nath.",
      "O crescimento da moda circular também se explica pela crise de acessibilidade das roupas novas. Com o aumento dos preços e a popularização de influenciadores de luxo, a moda se distancia da realidade da maioria. Os brechós, por outro lado, aproximam as pessoas da possibilidade de se expressar com liberdade. “Você não precisa do luxo pra ser exclusivo, precisa de criatividade e propósito”, resume Nath.",
      "Para ela, esse não é um movimento passageiro. “As fast fashions vão sentir a pressão e tentar trazer esse público de volta, mas acho que vai ser algo pau a pau. A moda circular veio pra ficar.”",
      "O futuro dos brechós, portanto, está diretamente ligado a essa geração consciente, que entende a roupa como ferramenta de expressão e transformação social. Mais do que tendência, a moda de segunda mão representa uma mudança cultural, um novo olhar para o consumo, para o meio ambiente e para o próprio ato de vestir.",
    ],
  },
];

export function NewsletterPageContent() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<number | null>(null);

  return (
    <div className="space-y-8 sm:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/50 bg-white/98 shadow-xl border border-white/50 px-6 py-6 text-center md:rounded-3xl md:px-8 md:py-8"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
          newsletters publicadas
        </span>
        <h1 className="mt-2 font-heading text-2xl text-foreground md:text-3xl">
          Confira abaixo nossas newsletters editoriais
        </h1>
        <p className="mt-2 text-sm text-foreground/70">
          Histórias e análises sobre moda circular em Curitiba
        </p>
      </motion.div>

      <section className="space-y-8 bg-transparent">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-transparent">
          {newsletters.map((newsletter, index) => (
            <motion.article
              key={newsletter.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="h-full overflow-hidden border-white/50 bg-white/98 shadow-sm cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg group"
                onClick={() => setSelectedNewsletter(selectedNewsletter === index ? null : index)}
              >
                <CardHeader className="space-y-4 bg-gradient-to-br from-primary/20 via-white to-secondary/20 px-6 py-6">
                  <Badge className="w-fit rounded-full bg-primary/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground">
                    newsletter
                  </Badge>
                  <CardTitle className="font-heading text-xl leading-snug text-foreground">
                    {newsletter.title}
                  </CardTitle>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70">
                    por {newsletter.author}
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={selectedNewsletter === index ? "fechar" : "ler"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs font-medium text-foreground/60 group-hover:text-primary transition-colors"
                      >
                        {selectedNewsletter === index ? "Clique para fechar" : "Clique para ler"}
                      </motion.span>
                    </AnimatePresence>
                    <motion.div
                      animate={{ 
                        rotate: selectedNewsletter === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-foreground/50 group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>
                </CardHeader>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedNewsletter !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-3xl border border-white/50 bg-white/98 shadow-xl px-6 py-8 md:px-12"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge className="w-fit rounded-full bg-primary/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground">
                    newsletter completa
                  </Badge>
                  <h2 className="font-heading text-3xl leading-tight text-foreground md:text-4xl">
                    {newsletters[selectedNewsletter].title}
                  </h2>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/70">
                    por {newsletters[selectedNewsletter].author}
                  </p>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-foreground/70 md:text-lg">
                  {newsletters[selectedNewsletter].content.map((paragraph, paragraphIndex) => (
                    <motion.p
                      key={paragraphIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: paragraphIndex * 0.05 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/50 bg-white/98 shadow-xl border border-white/50 px-6 py-8 text-center md:px-12"
      >
        <h3 className="font-heading text-2xl text-foreground md:text-3xl">
          Novas newsletters em breve
        </h3>
        <p className="mt-3 text-sm text-foreground/70 md:text-base">
          Estamos preparando mais conteúdos editoriais sobre moda circular.
        </p>
      </motion.div>
    </div>
  );
}

