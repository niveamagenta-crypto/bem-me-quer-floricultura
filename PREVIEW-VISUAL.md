# 👁️ Preview Visual do Site
## Bem Me Quer | Floricultura

Aqui está como cada seção do site ficará:

---

## 📱 Layout Geral (One Page)

```
┌─────────────────────────────────────────┐
│         🌸 HEADER (FIXO)                │
│  [Logo] [Menu] [Chamar WhatsApp]        │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│                                          │
│         ⭐ HERO (FULL SCREEN)           │
│                                          │
│    Bem Me Quer                           │
│    Floricultura em Angra dos Reis        │
│                                          │
│    [Chamar WhatsApp] [Ver Portfólio]    │
│                                          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│         📖 SOBRE / HISTÓRIA             │
│                                          │
│  [Foto]    Texto sobre a empresa         │
│           Estatísticas (5 anos...)       │
│                                          │
│         Timeline com marcos              │
│         2019 → 2024                      │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│         💐 SERVIÇOS (3 CARDS)           │
│                                          │
│  [Eventos]  [Buquês]  [Plantas]         │
│                                          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│         📸 PORTFÓLIO / GALERIA          │
│                                          │
│  [Filtros: Todos|Eventos|Buquês...]     │
│                                          │
│  [Foto] [Foto] [Foto]                   │
│  [Foto] [Foto] [Foto]                   │
│  [Foto] [Foto] [Foto]                   │
│                                          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│         💬 DEPOIMENTOS                  │
│                                          │
│  ← "Texto do depoimento..." →           │
│     ⭐⭐⭐⭐⭐                            │
│     — Nome do Cliente                   │
│                                          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│         📞 CONTATO                      │
│                                          │
│  [Google Maps]  [Formulário]            │
│                  [Enviar WhatsApp]       │
│                                          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│         🌸 RODAPÉ                       │
│  Links | Serviços | Contato | Social    │
└─────────────────────────────────────────┘
                                          
           [💬 WhatsApp Flutuante]
```

---

## 🎨 Cores em Ação

### Header
- **Fundo:** Transparente → Branco (ao rolar)
- **Logo:** Rosa (#D95B6C) com emoji 🌸
- **Menu:** Branco/Cinza com underline rosa ao hover
- **Botão CTA:** Rosa com texto branco

### Hero
- **Fundo:** Imagem com overlay escuro
- **Título:** Branco com subtítulo rosa
- **Botões:**
  - Primário: Rosa (#D95B6C)
  - Secundário: Transparente com borda branca

### Sobre
- **Fundo:** Areia (#F6EEE9)
- **Cards Timeline:** Brancos com ícones coloridos

### Serviços
- **Fundo:** Branco
- **Cards:** Areia com hover elevação
- **Ícones:** Rosa/Verde/Dourado

### Galeria
- **Fundo:** Branco
- **Filtros:** Rosa ativo, areia inativo
- **Cards:** Overlay escuro ao hover

### Depoimentos
- **Fundo:** Areia com elementos decorativos
- **Card:** Branco com sombra elegante
- **Estrelas:** Dourado

### Contato
- **Fundo:** Branco
- **Cards Info:** Areia
- **Formulário:** Areia com inputs brancos

### Rodapé
- **Fundo:** Verde escuro (#24523A)
- **Texto:** Branco/Cinza claro
- **Icons:** Brancos com hover rosa

---

## 📱 Responsividade

### Mobile (< 768px)
```
┌──────────────┐
│  🌸 [☰]      │ ← Header compacto
├──────────────┤
│              │
│    HERO      │
│   Vertical   │
│              │
├──────────────┤
│    SOBRE     │
│   (Stack)    │
├──────────────┤
│   SERVIÇO    │
│   SERVIÇO    │ ← Cards empilhados
│   SERVIÇO    │
├──────────────┤
│   GALERIA    │
│   (1 col)    │
├──────────────┤
│ DEPOIMENTO   │
├──────────────┤
│   CONTATO    │
│   (Stack)    │
├──────────────┤
│   RODAPÉ     │
│   (Stack)    │
└──────────────┘
```

### Tablet (768px - 1024px)
```
┌─────────────────────┐
│  🌸 LOGO  [MENU]    │
├─────────────────────┤
│                     │
│       HERO          │
│                     │
├─────────────────────┤
│  [IMG]   [TEXTO]    │ ← Sobre (2 cols)
├─────────────────────┤
│ [SERV] [SERV]       │
│    [SERV]           │ ← 2 colunas
├─────────────────────┤
│ [FOTO][FOTO]        │
│ [FOTO][FOTO]        │ ← Galeria 2 cols
├─────────────────────┤
│   DEPOIMENTO        │
├─────────────────────┤
│ [MAPA] [FORM]       │ ← Contato (2 cols)
└─────────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────┐
│  🌸 LOGO   [MENU COMPLETO]  [CTA]    │
├──────────────────────────────────────┤
│                                       │
│            HERO FULL                  │
│                                       │
├──────────────────────────────────────┤
│    [IMAGEM]       [TEXTO SOBRE]      │
├──────────────────────────────────────┤
│  [SERVIÇO] [SERVIÇO] [SERVIÇO]       │ ← 3 cols
├──────────────────────────────────────┤
│  [FOTO] [FOTO] [FOTO]                │
│  [FOTO] [FOTO] [FOTO]                │ ← Galeria 3 cols
│  [FOTO] [FOTO] [FOTO]                │
├──────────────────────────────────────┤
│         ← DEPOIMENTO →               │
├──────────────────────────────────────┤
│    [GOOGLE MAPS]    [FORMULÁRIO]     │
├──────────────────────────────────────┤
│  [BRAND] [LINKS] [SERV] [CONTATO]    │ ← Rodapé 4 cols
└──────────────────────────────────────┘
```

---

## ✨ Animações

### Ao Carregar:
1. Header desce suavemente
2. Hero faz fade-in
3. Scroll indicator pulsa

### Ao Rolar:
1. **Header:**
   - Transparente → Branco sólido
   - Sombra aparece

2. **Seções:**
   - Fade-in + slide-up ao entrar na viewport
   - Stagger delay entre elementos

3. **Cards:**
   - Hover: Elevação + sombra
   - Ícones mudam de cor

### Interações:
1. **Botões:**
   - Hover: Escala 105% + sombra
   - Click: Efeito ripple

2. **Galeria:**
   - Hover: Overlay escuro + info
   - Click: Abre lightbox modal

3. **Carrossel:**
   - Auto-play: 5s entre slides
   - Transição suave

4. **WhatsApp Flutuante:**
   - Pulso suave constante
   - Hover: Tooltip aparece

---

## 🎯 Interações do Usuário

### Cliques Principais:

1. **Logo** → Volta ao topo
2. **Menu** → Scroll suave até seção
3. **Chamar WhatsApp** → Abre WhatsApp com mensagem
4. **Ver Portfólio** → Scroll até galeria
5. **Filtro Galeria** → Filtra fotos
6. **Foto Galeria** → Abre lightbox
7. **Setas Depoimentos** → Navega depoimentos
8. **Instagram Links** → Abre @bemmequer.angra
9. **Enviar Formulário** → Redireciona WhatsApp
10. **Voltar ao Topo** → Scroll suave ao início

---

## 📊 Fluxo do Usuário

```
USUÁRIO CHEGA NO SITE
        ↓
    VÊ O HERO
(Primeira impressão)
        ↓
    ROLA PARA BAIXO
        ↓
    LÊ SOBRE A EMPRESA
        ↓
    VÊ OS SERVIÇOS
        ↓
    EXPLORA O PORTFÓLIO
(Filtra por categoria)
        ↓
    LÊ DEPOIMENTOS
        ↓
    DECIDE ENTRAR EM CONTATO
        ↓
CLICA EM "CHAMAR WHATSAPP"
        ↓
    É REDIRECIONADO
        ↓
    CONVERSA NO WHATSAPP
        ↓
    🎉 CONVERSÃO!
```

---

## 🌟 Pontos de Destaque

### 1. Hero Impactante
- Full-screen
- Imagem emocional
- CTAs claros
- Social proof

### 2. Timeline Visual
- Mostra evolução da empresa
- Ícones coloridos
- Layout moderno

### 3. Galeria Interativa
- Filtros funcionais
- Lightbox elegante
- Lazy loading

### 4. Múltiplos CTAs
- WhatsApp em 4 lugares:
  1. Header
  2. Hero
  3. Serviços
  4. Botão flutuante (sempre visível)

### 5. Social Proof
- 5 depoimentos reais
- Estrelas de avaliação
- Link para Instagram

---

## 📐 Medidas e Espaçamentos

### Container:
- **Desktop:** 1280px max-width
- **Padding:** 4rem (desktop), 1rem (mobile)

### Seções:
- **Padding Vertical:** 5rem (20 = 80px)
- **Espaço entre elementos:** 2-4rem

### Tipografia:
- **H1 Hero:** 3-4.5rem (48-72px)
- **H2 Seções:** 2.5-3rem (40-48px)
- **H3 Cards:** 1.5rem (24px)
- **Corpo:** 1rem (16px)
- **Small:** 0.875rem (14px)

### Bordas:
- **Cards:** rounded-3xl (24px)
- **Botões:** rounded-full
- **Inputs:** rounded-xl (12px)

---

## 🎨 Exemplos de Cards

### Card de Serviço:
```
┌────────────────────────┐
│                        │
│      [IMAGEM]          │
│                        │
├────────────────────────┤
│  [💐 ÍCONE]            │
│                        │
│  Ornamentação          │
│  de Eventos            │
│                        │
│  Descrição do          │
│  serviço aqui...       │
│                        │
│  [Ver projetos →]      │
└────────────────────────┘
```

### Card de Depoimento:
```
┌────────────────────────┐
│                        │
│    ⭐⭐⭐⭐⭐          │
│                        │
│  "Texto do             │
│   depoimento           │
│   completo aqui..."    │
│                        │
│  — Nome do Cliente     │
│     Cidade             │
│                        │
└────────────────────────┘
```

### Card de Contato:
```
┌────────────────────────┐
│  [📱]  WhatsApp        │
│                        │
│  +55 24 99277-1513     │
│  Clique para chamar →  │
└────────────────────────┘
```

---

## 📱 Botão Flutuante WhatsApp

```
                    ┌──────────────────┐
                    │ Bem Me Quer      │
                    │ 🟢 Online agora  │
                    │                  │
                    │ Olá! 👋 Como     │
                    │ podemos ajudar?  │
                    │                  │
                    │ [Iniciar]        │
                    └────────┐         │
                             │         │
                        ┌────▼─────┐   │
                        │          │◄──┘
                        │   💬(1)  │
                        │          │
                        └──────────┘
                        ↑ Sempre visível
                        ↑ Animado (pulso)
```

---

## 🎯 Call-to-Actions (CTAs)

### Primário (Rosa):
- "Chamar no WhatsApp"
- "Solicitar Orçamento"
- "Enviar via WhatsApp"

### Secundário (Outline):
- "Ver Portfólio"
- "Ver projetos"
- "Abrir Instagram"

---

## 🌈 Experiência Visual

### Dia Típico do Usuário:

**Mobile (Manhã):**
- Acorda, vê Instagram da floricultura
- Clica no link da bio
- Chega no site mobile
- Hero impacta
- Rola rapidamente
- Vê fotos na galeria
- Clica no WhatsApp flutuante
- Faz contato

**Desktop (Tarde):**
- Pesquisa no Google
- Encontra o site
- Navega pelo menu fixo
- Explora cada seção
- Lê depoimentos
- Vê localização no mapa
- Preenche formulário
- Envia via WhatsApp

---

## ✅ O que o Usuário Sente

- 🌸 **Elegância:** Design refinado
- 💐 **Profissionalismo:** Layout organizado
- 💚 **Confiança:** Depoimentos reais
- ⚡ **Rapidez:** Site carrega rápido
- 📱 **Facilidade:** Botões grandes, fácil usar
- 🎨 **Beleza:** Cores harmoniosas
- ❤️ **Afeto:** Linguagem calorosa

---

## 🎉 Resultado Final

Um site que:
- ✨ **Impressiona** na primeira visita
- 📱 **Funciona** em qualquer dispositivo
- 🚀 **Carrega** rapidamente
- 💬 **Converte** visitantes em contatos
- 🔍 **Aparece** no Google
- 💝 **Transmite** os valores da marca

---

**Pronto para encantar seus clientes! 🌸**

