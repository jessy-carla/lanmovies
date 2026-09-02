# 📚 Guia de Deployment - Lanmovies

## ✅ Status atual do projeto

O seu projeto **Lanmovies** está totalmente configurado para deploy automático no GitHub Pages!

## 🔧 Configurações aplicadas

### 1. **Correções de Segurança** ✅
- ✅ API Key removida do código-fonte
- ✅ Variável de ambiente `VITE_TMDB_API_KEY` configurada
- ✅ Arquivo `.env.example` criado como template
- ✅ `.gitignore` atualizado para proteger `.env.local`

### 2. **Configuração de Build** ✅
- ✅ `vite.config.js` configurado com:
  - Base URL: `/lanmovies/`
  - Output: `docs/` (diretório usado pelo GitHub Pages)

### 3. **GitHub Actions** ✅
- ✅ Workflow automático de build e deploy
- ✅ Trigger: push na branch `develop`
- ✅ Deploy automático para GitHub Pages

### 4. **Documentação** ✅
- ✅ README.md atualizado com instruções completas
- ✅ Guia de setup local
- ✅ Informações de deploy

## 🚀 Como fazer deploy

### Opção 1: Push automático (Recomendado)

```bash
# 1. Fça suas alterações localmente
git add .
git commit -m "descrição da mudança"

# 2. Push para a branch develop
git push origin develop
```

O GitHub Actions automaticamente:
- ✅ Executa o build com Vite
- ✅ Gera os arquivos em `docs/`
- ✅ Publica no GitHub Pages
- ✅ Você pode acompanhar em: https://github.com/jessy-carla/lanmovies/actions

### Opção 2: Build manual

```bash
# 1. Instale as dependências
npm install

# 2. Crie um arquivo .env.local com sua chave TMDB
echo "VITE_TMDB_API_KEY=sua_chave_aqui" > .env.local

# 3. Faça o build
npm run build

# 4. Commit e push
git add docs/
git commit -m "build: build para GitHub Pages"
git push origin develop
```

## 🌐 Acessar a aplicação publicada

Após o deploy, acesse:
**👉 https://jessy-carla.github.io/lanmovies/**

## 📋 Checklist final

Antes de fazer o deploy final, verifique:

- [ ] Você tem uma chave de API do TMDB
- [ ] Arquivo `.env.local` criado (NÃO commitar!)
- [ ] `npm run build` funciona sem erros localmente
- [ ] Branch `develop` está sincronizada com `origin`
- [ ] GitHub Pages está configurado para usar a branch `develop` e pasta `docs/`

## ⚙️ GitHub Pages Configuration

Para verificar/confirmar as configurações:

1. Acesse: https://github.com/jessy-carla/lanmovies/settings/pages
2. Verifique:
   - **Source**: Deploy from a branch
   - **Branch**: `develop` / `docs/` folder
   - **Status**: ✅ Published

## 🔍 Troubleshooting

### Problema: "API Key not defined"
**Solução:** 
- Crie arquivo `.env.local` com `VITE_TMDB_API_KEY=sua_chave`
- NÃO esqueça de fazer o build após configurar a chave

### Problema: "404 on GitHub Pages"
**Solução:**
- Verifique se a pasta `docs/` foi gerada após `npm run build`
- Verifique se as configurações do GitHub Pages apontam para `docs/`
- Aguarde 1-2 minutos para o GitHub Pages processar

### Problema: Assets não carregam (404)
**Solução:**
- Verifique o `vite.config.js` tem `base: '/lanmovies/'`
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Faça um novo build: `npm run build`

## 📝 Próximos passos

Agora que o projeto está configurado, você pode:

1. **Adicionar novas funcionalidades**
   - Mais detalhes de filmes
   - Favoritos/Watchlist
   - Filtro por gênero

2. **Melhorar a interface**
   - Design responsivo
   - Animações
   - Dark mode

3. **Otimizar performance**
   - Lazy loading
   - Code splitting
   - Image optimization

## 📞 Suporte

Se tiver dúvidas:
- Consulte a [documentação do Vite](https://vitejs.dev/)
- Consulte a [documentação do GitHub Pages](https://pages.github.com/)
- Consulte a [API do TMDB](https://www.themoviedb.org/settings/api)

---

**✅ Seu projeto está pronto para ir ao ar!** 🚀

Faça o push para `develop` e acompanhe o deploy em:
👉 https://github.com/jessy-carla/lanmovies/actions
