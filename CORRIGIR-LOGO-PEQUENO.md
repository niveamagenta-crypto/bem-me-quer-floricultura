# 🔧 Como Corrigir Logo Pequeno

## 🎯 **PROBLEMA:**
A imagem do logo está aparecendo muito pequena no header.

## ✅ **SOLUÇÕES:**

### **Opção 1: Substituir por imagem maior (RECOMENDADO)**

1. **Prepare uma imagem maior:**
   - Tamanho recomendado: **600x180px** ou maior
   - Formato: PNG (transparente) ou SVG
   - Resolução: 300 DPI ou mais

2. **Substitua a imagem:**
   - Vá em: `public/images/logo.png`
   - Substitua pela imagem maior
   - Salve com o mesmo nome: `logo.png`

3. **Pronto!** A imagem maior aparecerá automaticamente.

---

### **Opção 2: Usar CSS para ampliar (se imagem for muito pequena)**

Se a imagem original for muito pequena (ex: 100x30px), você pode:

1. **Editar `src/components/Logo.jsx`**
2. **Aumentar ainda mais o tamanho:**
   ```jsx
   className="h-32 md:h-40 lg:h-48 w-auto object-contain scale-150"
   ```

---

### **Opção 3: Converter para SVG (MELHOR QUALIDADE)**

1. **Crie um arquivo SVG** do logo
2. **Salve como:** `public/images/logo.svg`
3. **SVG escala perfeitamente** sem perder qualidade!

---

## 📏 **TAMANHOS RECOMENDADOS:**

### **Para Header:**
- **Mínimo:** 400x120px
- **Ideal:** 600x180px
- **Melhor:** 800x240px (para telas Retina)

### **Proporção:**
- Largura: 3x a altura (ex: 600x200px)
- Ou proporção da sua marca

---

## 🔍 **VERIFICAR TAMANHO DA IMAGEM:**

1. Abra: `public/images/logo.png`
2. Verifique as dimensões
3. Se for menor que 400px de largura, **substitua por uma maior**

---

## 💡 **DICA:**

Se você não tem a imagem em alta resolução:
- Peça ao designer a versão **2x** ou **3x** maior
- Ou exporte em **SVG** (vetorial = qualidade infinita)

---

**O código já está configurado para exibir a imagem maior!** 🚀

