# ⚡ Comandos Úteis
## Bem Me Quer | Floricultura

Referência rápida de todos os comandos necessários.

---

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Ou com Yarn
yarn install
```

---

## 🚀 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Porta padrão: http://localhost:3000
# O navegador abre automaticamente
```

---

## 🏗️ Build

```bash
# Gerar build de produção
npm run build

# Pasta gerada: dist/
```

---

## 👁️ Preview

```bash
# Testar build localmente antes do deploy
npm run preview

# Acesse: http://localhost:4173
```

---

## 🧹 Limpeza

```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

---

## 🌐 Deploy

### Vercel CLI

```bash
# Instalar Vercel globalmente
npm install -g vercel

# Login
vercel login

# Deploy para preview
vercel

# Deploy para produção
vercel --prod
```

### Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

---

## 🔧 Git

```bash
# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Commit
git commit -m "Initial commit: Site Bem Me Quer"

# Adicionar remote
git remote add origin https://github.com/seu-usuario/bem-me-quer.git

# Push
git push -u origin main
```

---

## 📝 Edição Rápida

```bash
# Abrir no VS Code
code .

# Abrir arquivo específico
code src/components/Hero.jsx
```

---

## 🔍 Busca e Substituição (Terminal)

### Linux/Mac:

```bash
# Buscar texto em todos os arquivos
grep -r "5524992771513" src/

# Substituir WhatsApp em todos os arquivos
find src/ -type f -name "*.jsx" -exec sed -i 's/5524992771513/SEU_NUMERO/g' {} +

# Substituir Instagram
find src/ -type f -name "*.jsx" -exec sed -i 's/@bemmequer.angra/@SEU_INSTA/g' {} +
```

### Windows (PowerShell):

```powershell
# Buscar texto
Get-ChildItem -Recurse -Include *.jsx | Select-String "5524992771513"

# Substituir (use editor de texto ou VS Code)
```

---

## 📊 Análise

```bash
# Ver tamanho da build
npm run build
du -sh dist/

# Windows
npm run build
dir dist
```

---

## 🐛 Debugging

```bash
# Limpar cache do Vite
rm -rf node_modules/.vite

# Ver logs detalhados
npm run dev -- --debug

# Verificar porta em uso (Linux/Mac)
lsof -i :3000

# Windows
netstat -ano | findstr :3000
```

---

## 📦 Gerenciamento de Pacotes

```bash
# Listar pacotes instalados
npm list --depth=0

# Verificar pacotes desatualizados
npm outdated

# Atualizar pacote específico
npm update react

# Instalar novo pacote
npm install nome-do-pacote

# Remover pacote
npm uninstall nome-do-pacote
```

---

## 🔐 Ambiente

```bash
# Copiar arquivo de exemplo
cp env.example.txt .env

# Editar variáveis
nano .env
# ou
code .env
```

---

## 🌍 Testes de Responsividade

```bash
# Abrir em navegador específico
npm run dev
# Depois acesse:
# Chrome: chrome http://localhost:3000
# Firefox: firefox http://localhost:3000
```

---

## 📱 Testar em Dispositivo Móvel

### Na mesma rede:

```bash
# 1. Iniciar dev server
npm run dev

# 2. Ver IP local
# Linux/Mac:
ifconfig | grep "inet "

# Windows:
ipconfig

# 3. Acessar do celular:
# http://SEU-IP:3000
# Exemplo: http://192.168.1.10:3000
```

---

## 🔄 Reiniciar Servidor

```bash
# Parar servidor: Ctrl+C

# Reiniciar
npm run dev
```

---

## 📋 Informações do Sistema

```bash
# Versões instaladas
node --version
npm --version
git --version

# Informações do projeto
npm list react
npm list tailwindcss
```

---

## 🚨 Solução de Problemas

### Porta em uso:

```bash
# Mudar porta em vite.config.js
# server: { port: 3001 }

# Ou matar processo (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [número] /F
```

### Build falhando:

```bash
# Limpar tudo e reinstalar
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Erros de cache:

```bash
# Limpar cache npm
npm cache clean --force

# Limpar cache Vite
rm -rf node_modules/.vite
```

---

## 🎨 Customização Rápida

```bash
# Editar cores
code tailwind.config.js

# Editar serviços
code src/data/services.js

# Editar depoimentos
code src/data/testimonials.js

# Editar galeria
code src/data/gallery.js

# Editar Hero
code src/components/Hero.jsx
```

---

## 🔍 Busca de Arquivos

```bash
# Encontrar arquivo por nome
find . -name "Header.jsx"

# Windows
dir /s Header.jsx

# Listar todos os componentes
ls src/components/

# Listar estrutura de pastas
tree -L 3
# ou
find . -type d -maxdepth 3
```

---

## 📊 Performance

```bash
# Analisar bundle size
npm run build
npx vite-bundle-visualizer

# Lighthouse (Chrome DevTools)
# 1. Abrir Chrome DevTools (F12)
# 2. Tab "Lighthouse"
# 3. Generate report
```

---

## 🔗 Links Úteis

```bash
# Abrir documentação
# React: https://react.dev/
# Tailwind: https://tailwindcss.com/
# Vite: https://vitejs.dev/
```

---

## 💾 Backup

```bash
# Criar backup
zip -r bem-me-quer-backup-$(date +%Y%m%d).zip . -x "node_modules/*" "dist/*"

# Windows (PowerShell)
Compress-Archive -Path . -DestinationPath "backup-$(Get-Date -Format 'yyyyMMdd').zip" -Exclude node_modules,dist
```

---

## 📤 Compartilhar Localmente (ngrok)

```bash
# Instalar ngrok
npm install -g ngrok

# Iniciar servidor
npm run dev

# Em outro terminal, expor porta
ngrok http 3000

# Compartilhe a URL gerada
```

---

## ✅ Checklist Pré-Deploy

```bash
# 1. Build sem erros
npm run build

# 2. Preview local
npm run preview

# 3. Verificar build
ls -lh dist/

# 4. Deploy
vercel --prod
# ou
netlify deploy --prod
```

---

## 🎓 Aprendizado

```bash
# React DevTools (Browser Extension)
# Chrome: https://chrome.google.com/webstore/.../react-developer-tools
# Firefox: https://addons.mozilla.org/.../react-devtools

# Tailwind CSS IntelliSense (VS Code)
code --install-extension bradlc.vscode-tailwindcss
```

---

## 🔥 Dicas Avançadas

```bash
# Hot reload mais rápido
# Edite vite.config.js:
# server: { hmr: true }

# Build com análise
npm run build -- --mode production --minify

# Otimizar imagens (se adicionar locais)
npm install -g sharp-cli
sharp -i input.jpg -o output.webp
```

---

## 📞 Suporte

Se tiver problemas:

1. Consulte `README.md`
2. Veja `INSTALL.md`
3. Verifique documentação oficial
4. Stack Overflow

---

**Estes comandos cobrem 99% das operações necessárias! 🚀**

