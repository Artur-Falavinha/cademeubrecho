## Cadê Meu Brechó?

Site editorial estático inspirado no layout da revista Topview, com foco em moda sustentável e brechós de Curitiba. Construído em Next.js 16 (App Router) com Tailwind CSS (v4), Shadcn/UI e Framer Motion.

### Requisitos

- Node.js 18+
- npm (ou yarn/pnpm/bun)

### Desenvolvimento local

```bash
npm install
npm run dev
```

O projeto ficará acessível em `http://localhost:3000`.

### Variáveis de ambiente

Crie um arquivo `.env.local` com:

```
NEXT_PUBLIC_FORMSPREE_FORM_ID=seu-id-no-formspree
```

Essa variável é utilizada para enviar inscrições da newsletter.

### Build estático e deploy no GitHub Pages

O projeto está configurado para export estático (Next `output: "export"`), com `basePath` automático para `/cademeubrecho` em produção.

```bash
npm run build
npx next export
```

A pasta `out/` conterá os arquivos para publicar no GitHub Pages (`gh-pages`).

### Ferramentas utilizadas

- Tailwind CSS v4 com tokens customizados
- Componentes Shadcn/UI adaptados para o editorial
- Framer Motion para animações suaves
- Lucide React para ícones (Instagram, YouTube, Spotify, WhatsApp)
- React Player para embeds de vídeo/podcast
- Next Metadata API para SEO estático

### Estrutura de páginas

- `Início`: Hero editorial, cards de matérias e reportagem completa
- `Quem Somos`: grid responsivo com as idealizadoras
- `Conteúdos`: podcast, vídeos e comunidade
- `Newsletter`: formulário Formspree e edições completas
- `Contato`: canais oficiais, press kit e informações gerais
- `Termos de Uso` e `Política de Privacidade`: conformidade com LGPD

### Boas práticas

- Todas as imagens ficam em `public/images`
- Utilizar `npm run lint` para garantir padrões (ESLint/Next)
- Testar performance acessando `out/` com uma ferramenta estática ou `npx serve out`
