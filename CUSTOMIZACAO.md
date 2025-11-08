# 🎨 Guia de Customização
## Bem Me Quer | Floricultura

Este guia mostra como personalizar o site de forma fácil e rápida.

---

## 📝 Alterando Conteúdo

### 1. Serviços

Edite: `src/data/services.js`

```javascript
export const services = [
  {
    id: 1,
    title: 'Nome do Serviço',           // Título do card
    description: 'Descrição completa',   // Texto explicativo
    icon: 'flower',                      // Ícone (flower, heart, leaf)
    image: 'URL_DA_IMAGEM',             // Link da imagem
    link: '#portfolio',                  // Link do botão
  },
  // Adicione mais serviços aqui...
];
```

### 2. Depoimentos

Edite: `src/data/testimonials.js`

```javascript
export const testimonials = [
  {
    id: 1,
    text: 'Texto do depoimento aqui',
    author: 'Nome do Cliente',
    location: 'Cidade',
    rating: 5,  // 1 a 5 estrelas
  },
  // Adicione mais depoimentos aqui...
];
```

### 3. Galeria de Fotos

Edite: `src/data/gallery.js`

```javascript
export const galleryItems = [
  {
    id: 1,
    category: 'eventos',  // eventos, buques, ou plantas
    image: 'URL_DA_IMAGEM',
    title: 'Título da Foto',
    description: 'Descrição curta',
  },
  // Adicione mais fotos aqui...
];
```

**Categorias disponíveis:**
- `eventos` - Ornamentação de eventos
- `buques` - Buquês
- `plantas` - Plantas de cultivo

---

## 🎨 Alterando Cores

### Paleta Atual:

Edite: `tailwind.config.js`

```javascript
colors: {
  primary: {
    DEFAULT: '#D95B6C',    // Rosa suave (primária)
    dark: '#C54456',       // Rosa escuro
    light: '#E68393',      // Rosa claro
  },
  secondary: {
    DEFAULT: '#24523A',    // Verde profundo
    dark: '#1A3D2B',       // Verde escuro
    light: '#2E6647',      // Verde claro
  },
  sand: {
    DEFAULT: '#F6EEE9',    // Areia/Off-white (fundo)
    dark: '#EFE3DB',       // Areia escura
  },
  gold: {
    DEFAULT: '#D4A15A',    // Dourado suave
    dark: '#C08F48',       // Dourado escuro
  },
}
```

### Como Alterar:

1. Escolha suas cores (use [Coolors](https://coolors.co/) para paletas)
2. Substitua os códigos hexadecimais (#D95B6C, etc.)
3. Salve e recarregue o navegador

**Exemplo:**

```javascript
primary: {
  DEFAULT: '#FF6B9D',  // Nova cor rosa mais vibrante
  dark: '#E5527F',
  light: '#FF8AB5',
},
```

---

## 🖼️ Adicionando Suas Próprias Imagens

### Opção 1: Usar imagens locais (recomendado)

1. Crie a pasta: `public/images/`
2. Adicione suas fotos nessa pasta
3. Use nos arquivos de dados:

```javascript
image: '/images/minha-foto.jpg',
```

### Opção 2: Usar URLs externas (Unsplash, etc.)

```javascript
image: 'https://exemplo.com/imagem.jpg',
```

### Dicas de Imagens:

- **Formato:** Use WebP ou JPG (PNG para logos)
- **Tamanho:** Máximo 500KB por imagem
- **Dimensões recomendadas:**
  - Hero: 1920x1080px
  - Serviços: 800x600px
  - Galeria: 800x800px
  - Sobre: 800x600px

### Comprimir Imagens:

- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

---

## 📱 Alterando Contatos

### WhatsApp

Busque e substitua `5524992771513` pelo seu número nos arquivos:

```bash
src/components/Header.jsx
src/components/Hero.jsx
src/components/Contact.jsx
src/components/FloatingWhatsApp.jsx
```

**Formato:** `55` (BR) + `24` (DDD) + `992771513` (número)

### Instagram

Busque e substitua `@bemmequer.angra` pelo seu @:

```bash
src/components/Testimonials.jsx
src/components/Contact.jsx
src/components/Footer.jsx
```

### Google Maps

Edite: `src/components/Contact.jsx`

1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque seu endereço
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie o código do iframe
5. Substitua no arquivo Contact.jsx

---

## ✍️ Alterando Textos

### Hero (Seção Principal)

Edite: `src/components/Hero.jsx`

```javascript
<h1>Bem Me Quer  {/* Título principal */}
  <span>Floricultura em Angra dos Reis</span>
</h1>

<p>
  Buquês, ornamentação de eventos...  {/* Subtítulo */}
</p>
```

### Sobre

Edite: `src/components/About.jsx`

```javascript
<p>
  Somos a <strong>Bem Me Quer</strong>, uma floricultura...
</p>
```

### Linha do Tempo

Edite o array `timeline` em: `src/components/About.jsx`

```javascript
const timeline = [
  {
    year: '2019',
    title: 'Abertura da loja',
    icon: <Leaf />,
  },
  // Adicione ou edite marcos aqui...
];
```

---

## 🎭 Alterando Fontes

### Fontes Atuais:

- **Títulos:** Playfair Display (elegante, serif)
- **Corpo:** Inter (moderna, sans-serif)

### Para Trocar:

1. Acesse [Google Fonts](https://fonts.google.com/)
2. Escolha suas fontes
3. Edite `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap');
```

4. Edite `tailwind.config.js`:

```javascript
fontFamily: {
  display: ['SuaFonte', 'serif'],
  sans: ['OutraFonte', 'sans-serif'],
}
```

---

## 🔧 Customizações Avançadas

### Animações

Edite: `src/index.css`

```css
.animate-slide-up {
  animation-duration: 0.6s;  /* Velocidade da animação */
}
```

### Espaçamento

Componentes usam classes Tailwind:
- `py-20` = padding vertical (5rem)
- `px-4` = padding horizontal (1rem)
- `mb-8` = margin bottom (2rem)

Para ajustar, altere os números:
- `py-10` (menor) → `py-20` (atual) → `py-32` (maior)

### Bordas Arredondadas

```javascript
className="rounded-3xl"  // Muito arredondado
className="rounded-2xl"  // Médio
className="rounded-xl"   // Pouco
className="rounded-lg"   // Mínimo
```

### Sombras

```javascript
className="shadow-xl"   // Sombra grande
className="shadow-lg"   // Sombra média
className="shadow-md"   // Sombra pequena
```

---

## 📊 Adicionando Google Analytics

1. Crie conta em [analytics.google.com](https://analytics.google.com)
2. Obtenha seu ID (G-XXXXXXXXXX)
3. Edite `index.html`, adicione antes de `</head>`:

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

## 🌐 SEO / Meta Tags

Edite: `index.html`

```html
<title>Seu Título Aqui</title>
<meta name="description" content="Sua descrição aqui" />
```

### JSON-LD (Dados Estruturados)

Edite o script JSON-LD em `index.html`:

```json
{
  "@type": "Florist",
  "name": "Seu Nome",
  "telephone": "+5500000000000",
  "address": {
    "addressLocality": "Sua Cidade",
    "addressRegion": "UF"
  }
}
```

---

## 🎯 Menu de Navegação

Edite: `src/components/Header.jsx`

```javascript
const menuItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  // Adicione mais itens aqui...
];
```

**Nota:** O `id` deve corresponder ao `id` da seção no HTML.

---

## 💬 Formulário de Contato

O formulário redireciona para WhatsApp. Para alterar campos:

Edite: `src/components/Contact.jsx`

```javascript
<input
  type="text"
  name="nomedocampo"
  placeholder="Texto do placeholder"
  required
/>
```

---

## 🎨 Botão Flutuante do WhatsApp

### Alterar posição:

Edite: `src/components/FloatingWhatsApp.jsx`

```javascript
className="fixed bottom-6 right-6"  // Canto inferior direito (atual)
// Ou:
className="fixed bottom-6 left-6"   // Canto inferior esquerdo
```

### Desabilitar animação de pulso:

Remova a classe `animate-pulse-soft`

---

## 📱 Favicon (Ícone do Site)

O favicon atual é um SVG de flor. Para personalizar:

### Opção 1: Editar o SVG atual

Edite: `public/favicon.svg`

### Opção 2: Usar PNG

1. Crie um ícone 512x512px
2. Salve como: `public/favicon.png`
3. Edite `index.html`:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

### Geradores de Favicon:

- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

---

## ✅ Checklist de Customização

- [ ] Logo e nome da empresa
- [ ] Paleta de cores
- [ ] Textos do Hero
- [ ] Seção Sobre
- [ ] Serviços (3 cards)
- [ ] Galeria de fotos (pelo menos 10)
- [ ] Depoimentos (3-5)
- [ ] Número WhatsApp
- [ ] Instagram
- [ ] Google Maps
- [ ] Favicon
- [ ] Meta tags SEO
- [ ] JSON-LD

---

## 🆘 Precisa de Ajuda?

1. **Documentação oficial:**
   - [React](https://react.dev/)
   - [Tailwind CSS](https://tailwindcss.com/)

2. **Testou e funcionou?**
   ```bash
   npm run dev  # Testar localmente
   npm run build  # Build de produção
   ```

3. **Algo quebrou?**
   - Desfaça as mudanças (Ctrl+Z)
   - Ou reverta para versão anterior no Git

---

**Sucesso na customização! 🌸**

