# Cadê Meu Brechó

Site do projeto "Cadê Meu Brechó?" - Histórias da moda de segunda mão em Curitiba.

## Tecnologias Utilizadas

- **React + Vite** - Framework principal
- **Tailwind CSS** - Estilização moderna
- **React Router DOM** - Roteamento
- **React Scroll** - Smooth scrolling na navbar
- **Swiper.js** - Carrossel no footer

## Como executar o projeto

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.jsx      # Barra de navegação com smooth scroll
│   ├── HeroSection.jsx # Seção inicial com background
│   ├── AboutSection.jsx # Seção "Quem somos"
│   ├── NewsletterSection.jsx # Seção de newsletters
│   ├── ContentSection.jsx # Seção de conteúdos
│   └── Footer.jsx      # Footer com carrossel e redes sociais
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página principal
│   └── Newsletter.jsx  # Página de newsletter (placeholder)
├── styles/             # Estilos globais
│   └── index.css       # Configuração do Tailwind
├── App.jsx             # Componente principal com rotas
└── main.jsx            # Ponto de entrada da aplicação
```

## Funcionalidades

- ✅ Navbar com smooth scrolling
- ✅ Seção hero com background image
- ✅ Seção sobre o projeto
- ✅ Cards de newsletter com roteamento
- ✅ Seção de conteúdos (Spotify e WhatsApp)
- ✅ Footer com carrossel de idealizadoras
- ✅ Botões de redes sociais
- ✅ Design responsivo
- ✅ Cores personalizadas (verde e rosa claro)

## Próximos Passos

- [ ] Adicionar conteúdo real das newsletters
- [ ] Configurar links reais do Spotify e WhatsApp
- [ ] Adicionar fotos reais das idealizadoras
- [ ] Implementar formulários de contato
- [ ] Adicionar mais conteúdo multimídia