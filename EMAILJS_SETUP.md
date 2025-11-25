# Configuração do EmailJS para Newsletter

## Passos para configurar o EmailJS:

### 1. Criar conta no EmailJS
- Acesse https://www.emailjs.com/
- Crie uma conta gratuita

### 2. Configurar Service
- No dashboard, vá em "Email Services"
- Clique em "Add New Service"
- Escolha seu provedor de email (Gmail, Outlook, etc.)
- Configure com suas credenciais
- Anote o Service ID

### 3. Criar Template
- Vá em "Email Templates"
- Clique em "Create New Template"
- Use este template HTML:

```html
Olá!

Você solicitou nossa newsletter: {{newsletter_title}}
Por: {{newsletter_author}}

Conteúdo:
{{newsletter_content}}

---
Cadê Meu Brechó
Moda circular em Curitiba
```

- Anote o Template ID

### 4. Obter Public Key
- Vá em "Account" > "General"
- Copie sua Public Key

### 5. Atualizar .env.local
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

### 6. Testar
- Rebuild o projeto: `npm run build`
- Teste o envio de newsletter

## Limitações da conta gratuita:
- 200 emails por mês
- Perfeito para este caso de uso