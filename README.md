# 🌸 Bem Me Quer | Floricultura em Angra dos Reis

Site institucional moderno e responsivo para a floricultura Bem Me Quer, desenvolvido com React e Tailwind CSS.

## 📋 Sobre o Projeto

Site one-page profissional apresentando serviços de:
- 🎉 Ornamentação de Eventos
- 💐 Buquês Autorais
- 🌿 Plantas de Cultivo

**Localização:** Angra dos Reis, RJ – Brasil  
**Contato:** +55 24 99277-1513  
**Instagram:** [@bemmequer.angra](https://instagram.com/bemmequer.angra)

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos
- **Responsive Design** - Mobile-first

## 🎨 Design

### Paleta de Cores
- **Rosa Suave:** `#D95B6C` (primária)
- **Verde Profundo:** `#24523A` (secundária)
- **Areia/Off-white:** `#F6EEE9` (background)
- **Dourado Suave:** `#D4A15A` (detalhes)
- **Texto Escuro:** `#2F2F2F`

### Tipografia
- **Títulos:** Playfair Display (serif elegante)
- **Corpo:** Inter (moderna e legível)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📱 Funcionalidades

✅ Design 100% responsivo (mobile-first)  
✅ Navegação suave entre seções (smooth scroll)  
✅ Header com scroll-spy e fundo dinâmico  
✅ Galeria com filtros por categoria  
✅ Carrossel de depoimentos  
✅ Botão flutuante do WhatsApp  
✅ Formulário de contato integrado ao WhatsApp  
✅ Google Maps embed  
✅ Animações e microinterações  
✅ Otimização de performance  
✅ SEO otimizado com meta tags  
✅ Schema.org JSON-LD (LocalBusiness)  
✅ Acessibilidade (WCAG AA)  

## 🗂️ Estrutura do Projeto

```
bem-me-quer/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── data/
│   │   ├── services.js
│   │   ├── testimonials.js
│   │   └── gallery.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Configuração

### Personalização de Conteúdo

Os dados do site podem ser facilmente editados nos arquivos:

- **Serviços:** `src/data/services.js`
- **Depoimentos:** `src/data/testimonials.js`
- **Galeria:** `src/data/gallery.js`

### WhatsApp

O número de WhatsApp está configurado como: **+55 24 99277-1513**

Para alterar, edite os componentes:
- `src/components/Hero.jsx`
- `src/components/FloatingWhatsApp.jsx`
- `src/components/Contact.jsx`

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta 'dist' para Netlify
```

### GitHub Pages
Adicione ao `package.json`:
```json
{
  "homepage": "https://seuusuario.github.io/bem-me-quer"
}
```

## 📊 SEO

O site já vem configurado com:

- Meta tags otimizadas
- Open Graph tags
- Twitter Cards
- JSON-LD structured data (LocalBusiness)
- Sitemap.xml
- Robots.txt

## 📄 Licença

© 2025 Bem Me Quer - Floricultura em Angra dos Reis

---

**Desenvolvido com 💐 para Bem Me Quer**

