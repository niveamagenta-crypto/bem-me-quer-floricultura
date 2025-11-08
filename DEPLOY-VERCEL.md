# 🚀 Como Fazer Deploy no Vercel

## 📋 **PRÉ-REQUISITOS:**

1. ✅ Projeto React funcionando localmente
2. ✅ Conta no GitHub (gratuita)
3. ✅ Conta no Vercel (gratuita)

---

## 🎯 **MÉTODO 1: Deploy via Vercel CLI (Rápido)**

### **Passo 1: Instalar Vercel CLI**
```bash
npm install -g vercel
```

### **Passo 2: Fazer Login**
```bash
vercel login
```

### **Passo 3: Deploy**
```bash
# Na pasta do projeto
cd "C:\Users\Felipe\Desktop\bem me quer"

# Deploy de produção
vercel --prod
```

### **Passo 4: Seguir as instruções**
- O Vercel vai perguntar algumas coisas
- Aperte Enter para usar as configurações padrão
- Pronto! Seu site estará online! 🎉

---

## 🎯 **MÉTODO 2: Deploy via GitHub (Recomendado)**

### **Passo 1: Criar Repositório no GitHub**

1. **Acesse:** https://github.com/new
2. **Nome do repositório:** `bem-me-quer-floricultura`
3. **Tipo:** Público ou Privado
4. **Clique em:** "Create repository"

### **Passo 2: Conectar ao GitHub**

```bash
# Na pasta do projeto
cd "C:\Users\Felipe\Desktop\bem me quer"

# Inicializar Git (se ainda não fez)
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit - Bem Me Quer Floricultura"

# Conectar ao repositório GitHub
git remote add origin https://github.com/SEU_USUARIO/bem-me-quer-floricultura.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### **Passo 3: Deploy no Vercel**

1. **Acesse:** https://vercel.com
2. **Clique em:** "Sign Up" ou "Login"
3. **Faça login com GitHub**
4. **Clique em:** "Add New Project"
5. **Importe o repositório:** `bem-me-quer-floricultura`
6. **Configurações:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
7. **Clique em:** "Deploy"
8. **Aguarde alguns minutos**
9. **Pronto!** Seu site estará online! 🎉

---

## ⚙️ **CONFIGURAÇÕES DO VERCEL**

### **Arquivo `vercel.json` (Opcional)**

Crie um arquivo `vercel.json` na raiz do projeto:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔧 **CONFIGURAÇÕES IMPORTANTES**

### **1. Variáveis de Ambiente (se necessário)**

Se você tiver variáveis de ambiente:

1. No Vercel Dashboard
2. Vá em: **Settings → Environment Variables**
3. Adicione suas variáveis
4. Faça um novo deploy

### **2. Domínio Personalizado (Opcional)**

1. No Vercel Dashboard
2. Vá em: **Settings → Domains**
3. Adicione seu domínio
4. Siga as instruções de DNS

---

## 📝 **CHECKLIST ANTES DO DEPLOY**

- [ ] Projeto funciona localmente (`npm run dev`)
- [ ] Build funciona (`npm run build`)
- [ ] Não há erros no console
- [ ] Todas as imagens estão na pasta `public/`
- [ ] Links estão funcionando
- [ ] Responsivo está OK
- [ ] SEO está configurado (meta tags)

---

## 🚀 **COMANDOS ÚTEIS**

### **Build Local (testar antes do deploy)**
```bash
npm run build
npm run preview
```

### **Deploy Manual**
```bash
vercel --prod
```

### **Ver logs do deploy**
```bash
vercel logs
```

---

## 📊 **MONITORAMENTO**

Após o deploy, você terá:
- ✅ URL de produção (ex: `bem-me-quer.vercel.app`)
- ✅ Deploys automáticos a cada push no GitHub
- ✅ Preview de cada Pull Request
- ✅ Analytics (opcional)
- ✅ Logs de erro

---

## 🔄 **ATUALIZAÇÕES AUTOMÁTICAS**

Se você conectou ao GitHub:
- ✅ Cada push no `main` = deploy automático
- ✅ Cada Pull Request = preview automático
- ✅ Deploys instantâneos

---

## 🆘 **SOLUÇÃO DE PROBLEMAS**

### **Erro: "Build Failed"**
```bash
# Teste o build localmente primeiro
npm run build

# Se funcionar local, o problema pode ser:
# - Variáveis de ambiente faltando
# - Dependências não instaladas
# - Erros no código
```

### **Erro: "404 Not Found" nas rotas**
- Adicione o arquivo `vercel.json` com as rewrites
- Ou configure no Vercel Dashboard: **Settings → Routing**

### **Erro: "Module not found"**
```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm install
```

---

## ✅ **DEPOIS DO DEPLOY**

1. **Teste todas as páginas:**
   - Página inicial: `/`
   - Portfólio: `/portfolio`
   - Links internos
   - Botões de WhatsApp

2. **Teste em diferentes dispositivos:**
   - Mobile
   - Tablet
   - Desktop

3. **Verifique performance:**
   - Vercel Analytics
   - Google PageSpeed

---

## 🎉 **PRONTO!**

Seu site estará online em:
- **URL:** `https://bem-me-quer.vercel.app` (ou seu domínio)
- **Status:** ✅ Online 24/7
- **SSL:** ✅ Automático
- **CDN:** ✅ Global

---

**Precisa de ajuda? Me avise!** 😊

