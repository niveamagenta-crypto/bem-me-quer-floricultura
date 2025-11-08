# 📦 Guia de Instalação e Deploy
## Bem Me Quer | Floricultura

Este guia completo ajudará você a configurar, desenvolver e publicar o site da floricultura Bem Me Quer.

---

## 🎯 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** (vem com Node.js) ou **yarn**
- **Git** - [Download](https://git-scm.com/)
- Editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

### Verificar instalação:

```bash
node --version  # Deve mostrar v18.x.x ou superior
npm --version   # Deve mostrar 9.x.x ou superior
```

---

## 🚀 Instalação Local

### 1. Clone ou navegue até o projeto

```bash
cd "C:\Users\Felipe\Desktop\bem me quer"
```

### 2. Instale as dependências

```bash
npm install
```

Isso instalará todas as bibliotecas necessárias:
- React 18
- Tailwind CSS 3
- Vite 5
- Lucide React (ícones)

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O site estará disponível em: **http://localhost:3000**

O servidor recarrega automaticamente quando você faz alterações no código.

---

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
bem-me-quer/
├── public/              # Arquivos públicos (favicon, robots.txt, etc.)
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── data/           # Dados do site (editável)
│   │   ├── services.js
│   │   ├── testimonials.js
│   │   └── gallery.js
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Entrada da aplicação
│   └── index.css       # Estilos globais
├── index.html          # HTML principal com SEO
├── package.json        # Dependências
├── tailwind.config.js  # Configuração Tailwind
└── vite.config.js      # Configuração Vite
```

### Editando Conteúdo

#### 📝 Alterar Textos e Imagens

1. **Serviços:** Edite `src/data/services.js`
2. **Depoimentos:** Edite `src/data/testimonials.js`
3. **Galeria:** Edite `src/data/gallery.js`

#### 🎨 Alterar Cores

Edite `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#D95B6C',  // Rosa principal
    // ...
  },
  // ...
}
```

#### 📞 Alterar Número WhatsApp

Busque e substitua `5524992771513` em:
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/FloatingWhatsApp.jsx`

#### 📍 Alterar Google Maps

Edite `src/components/Contact.jsx`, linha do iframe:
- Vá em [Google Maps](https://www.google.com/maps)
- Busque seu endereço
- Clique em "Compartilhar" → "Incorporar um mapa"
- Copie o código e substitua

---

## 📦 Build para Produção

### 1. Gerar build otimizada

```bash
npm run build
```

Isso cria uma pasta `dist/` com os arquivos otimizados:
- HTML/CSS/JS minificados
- Imagens otimizadas
- Assets comprimidos

### 2. Preview da build

```bash
npm run preview
```

Testa a versão de produção localmente antes do deploy.

---

## 🌐 Deploy / Hospedagem

### Opção 1: Vercel (Recomendado - GRÁTIS)

**Vercel** é rápido, gratuito e tem SSL automático.

#### Via Interface Web (Mais Fácil):

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub/GitLab/Bitbucket
3. Clique em "Add New Project"
4. Importe seu repositório Git ou faça upload da pasta
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Clique em "Deploy"

Seu site estará online em segundos!

#### Via CLI:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Opção 2: Netlify (GRÁTIS)

1. Acesse [netlify.com](https://www.netlify.com)
2. Arraste a pasta `dist/` para o site do Netlify
3. Ou conecte seu repositório Git

**Configurações Netlify:**
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Opção 3: GitHub Pages (GRÁTIS)

1. Instale o pacote gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:

```json
{
  "homepage": "https://seuusuario.github.io/bem-me-quer",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:

```bash
npm run deploy
```

### Opção 4: Hospedagem Tradicional (cPanel, etc.)

1. Execute `npm run build`
2. Faça upload do conteúdo da pasta `dist/` via FTP
3. Configure domínio para apontar para esses arquivos

---

## 🔧 Configurações Adicionais

### SSL / HTTPS

- **Vercel/Netlify:** SSL automático ✅
- **GitHub Pages:** SSL automático ✅
- **Hospedagem própria:** Configure Let's Encrypt

### Domínio Personalizado

#### Vercel:
1. Vá em "Settings" → "Domains"
2. Adicione `bemmequer.com` (ou seu domínio)
3. Configure DNS conforme instruções

#### Netlify:
1. Vá em "Domain settings"
2. Adicione custom domain
3. Configure DNS

**Configuração DNS típica:**
```
Tipo A  → @  → IP fornecido
CNAME   → www → alias fornecido
```

### Google Analytics (Opcional)

1. Crie conta em [analytics.google.com](https://analytics.google.com)
2. Obtenha o ID de rastreamento (G-XXXXXXXXXX)
3. Adicione ao `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Checklist Pré-Deploy

Antes de publicar, verifique:

- [ ] Testado em navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Testado em dispositivos móveis
- [ ] Todas as imagens carregam corretamente
- [ ] Links do WhatsApp funcionando
- [ ] Links do Instagram funcionando
- [ ] Formulário de contato testado
- [ ] Google Maps mostrando localização correta
- [ ] Meta tags SEO configuradas
- [ ] Favicon aparecendo
- [ ] Build sem erros: `npm run build`

---

## 🐛 Solução de Problemas

### Erro: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro ao executar `npm run dev`

Verifique se a porta 3000 está livre ou mude em `vite.config.js`:

```js
server: {
  port: 3001,  // Altere a porta
}
```

### Imagens não carregam

- Verifique se as URLs estão corretas
- Teste se as imagens do Unsplash estão acessíveis
- Considere fazer upload de imagens próprias em `/public/images/`

### Build muito grande

```bash
npm run build
```

Vite já otimiza automaticamente. Se ainda assim:
- Comprima imagens antes de usar
- Use formato WebP
- Remova dependências não utilizadas

---

## 📱 Testando Responsividade

### No Navegador:

1. Abra o site
2. Pressione `F12` (DevTools)
3. Clique no ícone de dispositivo móvel
4. Teste em diferentes tamanhos:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

### Ferramentas Online:

- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [BrowserStack](https://www.browserstack.com/)

---

## 🎓 Suporte e Documentação

### Recursos Úteis:

- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/)

### Comunidades:

- [React Brasil - Telegram](https://t.me/reactbrasil)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)

---

## 📞 Contato de Suporte Técnico

Se precisar de ajuda técnica:
- Verifique a documentação acima
- Consulte os logs de erro
- Entre em contato com desenvolvedor

---

## 🎉 Site Publicado!

Após o deploy, seu site estará acessível em:
- Vercel: `https://bem-me-quer.vercel.app`
- Netlify: `https://bem-me-quer.netlify.app`
- Ou seu domínio personalizado!

**Compartilhe com orgulho! 🌸**

---

**Desenvolvido com 💐 para Bem Me Quer Floricultura**

