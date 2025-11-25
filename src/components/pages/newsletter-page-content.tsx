"use client";

import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import { useState } from "react";
import { emailjs, emailConfig } from "@/lib/emailjs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const newsletters = [
  {
    id: 1,
    title: "Como os brechós online estão conquistando o público jovem",
    author: "Julia Budal",
    description: "Uma análise completa sobre como os brechós digitais estão transformando o consumo de moda entre os jovens curitibanos.",
  content: `Os brechós online vêm ganhando cada vez mais espaço entre o público jovem, e para entender esse movimento conversamos com quem vive essa transformação diariamente. Maria Vitória Fayad, fundadora do Maria Brechó, explica que a revolução começou quando os brechós deixaram de ser espaços considerados antigos e desorganizados para se tornarem vitrines digitais no Instagram e no WhatsApp. Em dez anos de mercado, ela viu o público migrar do Facebook para o Instagram, e percebeu que hoje a força do negócio está no online. Mesmo mantendo loja física, é nas redes sociais que acontecem as maiores vendas, impulsionadas por tráfego pago, produção constante de conteúdo e parcerias com influenciadoras que ampliam o alcance para todo o Brasil.

Essa presença digital exige variedade e dinamismo. Para atrair o público mais jovem, o Maria Brechó aposta em conteúdos diversos, vídeos curtos, looks produzidos, fotos no corpo, no manequim e em flat lay, permitindo que cada cliente se identifique com um tipo de linguagem. A ideia é que o feed represente o que é o brechó na prática: um espaço plural, com peças caras e baratas, marcas conhecidas e sem marca, looks joviais e outros elegantes. Essa mistura é fundamental para criar conexão e mostrar que existe algo para todas as idades e estilos.

A consumidora Leandra Caputo, de 23 anos, confirma a força das redes sociais nesse processo. Ela conta que só passou a olhar para os brechós com interesse depois de ver influenciadoras mostrando garimpos baratos, exclusivos e estilosos. Para ela e para muitos jovens, o que mais atrai é a combinação entre preço acessível, exclusividade e qualidade. Leandra sempre busca peças com bons materiais como couro, cetim, alfaiataria, porque sabe que o brechó pode oferecer itens duráveis por um valor menor. A sensação de "encontrar uma joia" no meio de peças usadas também pesa: o garimpo vira uma experiência única, capaz de reforçar identidade e estilo.

Além disso, o estigma em torno da compra de usados diminuiu muito com plataformas como Enjoei, Repassa e marketplaces, que facilitaram o processo de compra e venda. Mesmo com taxas, a compra continua vantajosa e, para muitos jovens, vender suas próprias peças virou uma forma de girar o guarda-roupa e garantir renda extra. Para Maria, outro ponto importante é o fator humano: brechós são negócios formados por pessoas reais. Essa relação cria uma comunidade forte no Instagram, onde clientes acompanham o dia a dia, perguntam da família, vibram com conquistas e se sentem parte da história do brechó. Essa proximidade gera confiança, algo que o fast fashion não oferece.

Apesar do sucesso, Maria observa que muitos brechós físicos estão reduzindo ou encerrando suas lojas para investir totalmente no digital. Já os novos empreendimentos do setor, segundo ela, nascem focados no online, com investimento em iluminação, tecnologia, criação de conteúdo e estratégias de marketing. Para Leandra, porém, é importante lembrar que a moda é cíclica, e o consumo de brechó pode ser uma tendência passageira dependendo das narrativas criadas nas redes sociais. Hoje o usado está em alta; amanhã, talvez o "novo" volte a ser sinônimo de status. Ainda assim, o acesso à informação transformou o mercado e permitiu que jovens encontrassem nos brechós uma forma de consumir mais livre, econômica e alinhada ao próprio estilo.

No fim, o que impulsiona os brechós online entre o público jovem é a combinação entre preço, exclusividade, facilidade de compra, influência digital e conexão humana. Um ecossistema que cresce e se adapta ao ritmo das redes sociais, dinâmico, visual, diversificado e cheio de personalidade.`
  },
  {
    id: 2,
    title: "Por que Curitiba está apaixonada pela moda de segunda mão?",
    author: "Isabelle Sestari",
    description: "Descubra como a capital paranaense está se tornando referência em moda circular e consumo consciente.",
    content: `Curitiba está vivendo uma verdadeira revolução fashion. Brechós deixaram de ser espaços esquecidos para se tornarem destinos obrigatórios para quem busca estilo, economia e consciência. Mas afinal, quem são os consumidores dessa moda circular? E por que cada vez mais curitibanos estão preferindo roupas usadas?

O que está por trás desse movimento?

Segundo especialistas, três fatores explicam o crescimento da moda de segunda mão:

- Economia: peças de qualidade, tecidos nobres e preços acessíveis.

- Consciência ambiental: reduzir impactos e prolongar o ciclo de vida das roupas.

- Cultura e estilo: moda é cíclica, e ressignificar peças é tendência criativa.

Comprar em brechó não é só sobre economizar, é sobre dar significado às roupas e fazer parte de um movimento que valoriza história e sustentabilidade.

Quem é o consumidor curitibano de brechó?

O perfil mais comum é descolado, consciente e antenado. Essa pessoa quer saber quem fez suas roupas, se preocupa com condições de trabalho e busca peças que expressem identidade. É um público que entende que moda sustentável não é 100% possível, mas acredita no design para a sustentabilidade e na circularidade: usar, transformar, trocar e reinventar.

Curitiba e seus brechós: do mofo à curadoria premium

Décadas atrás, brechós eram vistos como espaços desorganizados, com peças jogadas e cheiro de mofo. Hoje, a realidade é outra: curadoria cuidadosa, peças bem conservadas e ambientes convidativos. Essa mudança atraiu um público cada vez maior e consolidou a moda de segunda mão como estilo de vida, não apenas uma tendência passageira.

Mas há desafios:

Preços elevados em alguns brechós, que afastam consumidores. Falta de conexão entre discurso e prática, já que muitos ainda compram fast fashion enquanto falam de sustentabilidade.

O futuro da moda circular em Curitiba

A tendência é clara: esse consumo vai se fortalecer. A geração jovem influencia pais e familiares, e até pessoas com mais de 70 anos estão aderindo aos brechós, buscando peças com qualidade, estética e conforto que não encontram no varejo tradicional. Além disso, cresce a ideia de reconfigurar peças e dar nova vida a excedentes de coleções, agregando valor e mantendo o componente de moda.

Por que isso importa?

Comprar de segunda mão não é só sobre preço: é sobre história, identidade e responsabilidade. É sobre escolher peças que duram, que carregam significado e que ajudam a construir um futuro mais sustentável para a moda.

Quer descobrir onde garimpar?

Acesse o App do Cadê Meu Brechó? e encontre os melhores brechós da capital paranaense para começar sua jornada na moda circular.`
  },
  {
    id: 3,
    title: "Futuro dos Brechós: a geração consciente e a moda que se reinventa",
    author: "Julia Budal",
    description: "Como a Geração Z está transformando o consumo de moda e ressignificando os brechós como espaços de expressão e consciência.",
    content: `A moda está mudando, e a nova geração tem papel fundamental nesse processo. Cada vez mais jovens estão repensando a forma de consumir e se vestir, e os brechós ocupam um lugar central nesse movimento. O que antes era sinônimo de economia e necessidade hoje se transformou em um ato de expressão, identidade e consciência coletiva.

A chamada Geração Z vem ressignificando o consumo de segunda mão. Essa mudança é movida tanto por questões econômicas quanto por uma busca por autenticidade. Vestir-se, para esses jovens, não é apenas acompanhar tendências, mas construir um estilo próprio que dialogue com valores como sustentabilidade e criatividade. Em vez de seguir o ritmo acelerado da moda industrial, eles optam por um consumo mais afetivo e sustentável, e os brechós são o espaço ideal para isso.

Um exemplo dessa transformação é Nath Alencar, 23 anos, criadora de conteúdo e “exploradora de brechós” em Curitiba. O interesse pela moda circular surgiu de forma espontânea, quando ela se mudou de Belém para o sul do país. “Eu cheguei em Curitiba só com roupas de calor e percebi o quanto as lojas de departamento eram inacessíveis, principalmente com roupa de frio. Comecei a garimpar por necessidade, e hoje não parei mais”, conta.

O que começou como uma solução prática acabou se transformando em conteúdo digital. Nath gravou o primeiro vídeo com um roteiro de garimpo pelos brechós do centro de Curitiba, mostrando lojas, peças e dicas de compra. O vídeo viralizou e, desde então, ela segue produzindo vídeos sobre moda circular e economia criativa. “Foi tudo muito natural. Eu fiz um vídeo só pra ajudar uma amiga, e de repente vi que as pessoas queriam muito esse tipo de conteúdo”, explica.

Para Nath, o brechó é um espaço de liberdade. “A galera mais nova perdeu aquele preconceito de achar que brechó é roupa velha ou suja. Hoje é o contrário: é um mar de oportunidades. Você pode ser estiloso com qualquer tipo de roupa e qualquer valor”, diz. A relação com a moda passa a ser menos sobre status e mais sobre criatividade. O luxo deixa de estar no preço e passa a estar na autenticidade de quem veste.

As redes sociais têm papel essencial nesse processo. É nelas que os brechós e criadores de conteúdo se conectam com o público jovem, mostrando que é possível consumir de forma consciente sem abrir mão do estilo. No TikTok e no Instagram, vídeos de “garimpo”, provas de looks e tours por brechós locais se multiplicam. “O caminho pra alcançar o público é fazer um conteúdo que as pessoas vão salvar, que vai ser útil pra elas. Mostrar o que realmente dá pra encontrar”, afirma Nath.

Essa comunicação direta e espontânea gera identificação e cria uma comunidade em torno da moda circular. O público de Nath é diverso, mas majoritariamente feminino, formado por pessoas que buscam inspiração e também informação. “Recebo mensagens de gente que diz que foi num brechó porque viu meu vídeo. As pessoas confiam nessa troca, confiam na experiência”, conta.

Em Curitiba, o movimento ganha força com a abertura de brechós modernos, que investem em curadoria, decoração criativa e até cafés integrados ao espaço. Esses lugares se tornam pontos de encontro entre moda, sustentabilidade e cultura urbana. “Eu vejo que as lojas estão se adaptando pra alcançar essa galera. Tem muito espaço legal surgindo, com pegada jovem e criativa. A moda tá se reinventando porque precisa”, diz Nath.

O crescimento da moda circular também se explica pela crise de acessibilidade das roupas novas. Com o aumento dos preços e a popularização de influenciadores de luxo, a moda se distancia da realidade da maioria. Os brechós, por outro lado, aproximam as pessoas da possibilidade de se expressar com liberdade. “Você não precisa do luxo pra ser exclusivo, precisa de criatividade e propósito”, resume Nath.

Para ela, esse não é um movimento passageiro. “As fast fashions vão sentir a pressão e tentar trazer esse público de volta, mas acho que vai ser algo pau a pau. A moda circular veio pra ficar.”

O futuro dos brechós, portanto, está diretamente ligado a essa geração consciente, que entende a roupa como ferramenta de expressão e transformação social. Mais do que tendência, a moda de segunda mão representa uma mudança cultural, um novo olhar para o consumo, para o meio ambiente e para o próprio ato de vestir.`
  }
];

export function NewsletterPageContent() {
  const [email, setEmail] = useState("");
  const [selectedNewsletter, setSelectedNewsletter] = useState(newsletters[0]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !acceptedTerms) {
      setError("Por favor, preencha o email e aceite os termos.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          to_email: email,
          newsletter_title: selectedNewsletter.title,
          newsletter_author: selectedNewsletter.author,
          newsletter_content: selectedNewsletter.content,
        },
        emailConfig.publicKey
      );

      setIsSuccess(true);
      setEmail("");
      setAcceptedTerms(false);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError("Erro ao enviar newsletter. Verifique sua conexão e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/50 bg-white/98 shadow-xl px-6 py-12 text-center md:px-12"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="font-heading text-3xl text-foreground md:text-4xl">
            Newsletter enviada!
          </h1>
          <p className="mt-4 text-base text-foreground/70 md:text-lg">
            Verifique sua caixa de entrada para ler a newsletter "{selectedNewsletter.title}".
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="mt-6 rounded-full bg-primary text-foreground hover:bg-primary/90"
          >
            Solicitar outra newsletter
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/50 bg-white/98 shadow-xl px-6 py-6 text-center md:rounded-3xl md:px-8 md:py-8"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
          newsletter exclusiva
        </span>
        <h1 className="mt-2 font-heading text-2xl text-foreground md:text-3xl">
          Receba nossa newsletter por email
        </h1>
        <p className="mt-2 text-sm text-foreground/70">
          Conteúdo editorial sobre moda circular em Curitiba
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {newsletters.map((newsletter) => (
          <motion.div
            key={newsletter.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: newsletter.id * 0.1 }}
          >
            <Card className={`overflow-hidden border-white/50 bg-white/98 shadow-xl cursor-pointer transition-all h-full ${
              selectedNewsletter.id === newsletter.id ? 'ring-2 ring-primary' : 'hover:shadow-2xl'
            }`}
            onClick={() => setSelectedNewsletter(newsletter)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="rounded-full bg-primary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground">
                      disponível
                    </Badge>
                    {selectedNewsletter.id === newsletter.id && (
                      <Badge className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-green-700">
                        selecionada
                      </Badge>
                    )}
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg leading-snug text-foreground mb-2">
                      {newsletter.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 mb-3">
                      por {newsletter.author}
                    </CardDescription>
                    <p className="text-sm leading-relaxed text-foreground/70">
                      {newsletter.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="overflow-hidden border-white/50 bg-white/98 shadow-xl">
          <CardHeader className="bg-gradient-to-br from-primary/20 via-white to-secondary/20 px-6 py-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                <Mail className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <Badge className="mb-2 rounded-full bg-primary/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground">
                  newsletter selecionada
                </Badge>
                <CardTitle className="font-heading text-xl leading-snug text-foreground">
                  {selectedNewsletter.title}
                </CardTitle>
                <CardDescription className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70">
                  por {selectedNewsletter.author}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Seu email para receber a newsletter
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full border-border bg-white"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                  className="mt-1"
                />
                  <label htmlFor="terms" className="text-sm text-foreground/70 leading-relaxed">
                    Concordo com os{" "}
                    <a href="/termos-de-uso" className="text-primary hover:underline">
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="/politica-de-privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading || !email || !acceptedTerms}
                  className="w-full justify-center gap-2 rounded-full bg-primary text-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Receber Newsletter
                    </>
                  )}
                </Button>
              </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/50 bg-white/98 shadow-xl px-6 py-8 text-center md:px-12"
      >
        <h3 className="font-heading text-2xl text-foreground md:text-3xl">
          Mais newsletters em breve
        </h3>
        <p className="mt-3 text-sm text-foreground/70 md:text-base">
          Estamos preparando mais conteúdos editoriais exclusivos sobre moda circular em Curitiba.
        </p>
      </motion.div>
    </div>
  );
}