# ⚡ Início Rápido
## Bem Me Quer | Floricultura

Guia rápido para colocar o site no ar em 5 minutos!

---

## 📦 Passo 1: Instalar Dependências

Abra o terminal nesta pasta e execute:

```bash
npm install
```

⏱️ Tempo estimado: 1-2 minutos

---

## 🚀 Passo 2: Iniciar o Servidor

```bash
npm run dev
```

✅ O site abrirá automaticamente em: **http://localhost:3000**

---

## 🎨 Passo 3: Personalizar (Opcional)

### Alterar textos e fotos:
- `src/data/services.js` - Serviços
- `src/data/testimonials.js` - Depoimentos
- `src/data/gallery.js` - Galeria

### Alterar WhatsApp:
Busque e substitua `5524992771513` pelo seu número

### Alterar cores:
Edite `tailwind.config.js` na seção `colors`

📖 **Guia completo:** Veja `CUSTOMIZACAO.md`

---

## 📦 Passo 4: Gerar Build de Produção

Quando estiver pronto para publicar:

```bash
npm run build
```

Isso cria a pasta `dist/` com arquivos otimizados.

---

## 🌐 Passo 5: Publicar Online (GRÁTIS)

### Opção A: Vercel (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login (GitHub, Google, etc.)
3. Clique em "Add New Project"
4. Faça upload da pasta ou conecte repositório Git
5. Clique em "Deploy"

🎉 **Pronto! Site no ar em segundos!**

### Opção B: Netlify

1. Acesse [netlify.com](https://www.netlify.com)
2. Arraste a pasta `dist/` para o site
3. Aguarde o upload

🎉 **Site publicado!**

### Opção C: Via Terminal (Vercel CLI)

```bash
npm install -g vercel
vercel
```

Siga as instruções na tela.

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Site funcionando em `http://localhost:3000`
- [ ] WhatsApp link testado (clique nos botões)
- [ ] Instagram link testado
- [ ] Todas as fotos carregando
- [ ] Testado no celular (responsivo)
- [ ] Build sem erros: `npm run build`

---

## 🆘 Problemas Comuns

### "npm: comando não encontrado"
➡️ Instale o Node.js: [nodejs.org](https://nodejs.org/)

### "Porta 3000 em uso"
➡️ Mude a porta em `vite.config.js`:
```js
server: { port: 3001 }
```

### Imagens não aparecem
➡️ Verifique conexão com internet (usamos Unsplash)
➡️ Ou use imagens locais em `public/images/`

### Build com erro
➡️ Rode `npm install` novamente
➡️ Delete `node_modules` e `package-lock.json`, depois `npm install`

---

## 📚 Documentação Completa

- **Instalação detalhada:** `INSTALL.md`
- **Customização:** `CUSTOMIZACAO.md`
- **Sobre o projeto:** `README.md`

---

## 🎯 Comandos Úteis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Testa a build localmente
```

---

## 📞 Contato Original do Projeto

**Bem Me Quer Floricultura**
- 📱 WhatsApp: +55 24 99277-1513
- 📍 Angra dos Reis, RJ
- 📸 Instagram: @bemmequer.angra

---

**Bom trabalho! O site está pronto para impressionar! 🌸**

