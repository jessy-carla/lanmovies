# 🎬 Lanmovies

Aplicação web desenvolvida com **React + Vite** para consulta e exibição de filmes populares utilizando a **API do TMDB (The Movie Database)**.

O projeto foi desenvolvido com foco em praticar desenvolvimento **Front-End**, consumo de APIs, criação de componentes reutilizáveis e organização de uma aplicação React.

## 🚀 Sobre o projeto

O **Lanmovies** permite visualizar filmes populares através da API do TMDB, apresentando informações e imagens dos filmes de forma simples e organizada.

Este projeto faz parte da minha jornada de aprendizado em **Desenvolvimento Front-End**, com foco em React, JavaScript e consumo de APIs.

## 🛠️ Tecnologias utilizadas

* ⚛️ React 19
* ⚡ Vite 8
* 🟨 JavaScript
* 🎨 CSS3
* 🎬 TMDB API
* 🧩 React Hooks
* 🌐 HTML5

## 📂 Estrutura do projeto

```text
Lanmovies/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── CategoryList.jsx
│   │   ├── Ranking.jsx
│   │   └── CSS dos componentes
│   │
│   ├── hooks/
│   │   └── useMovies.js
│   │
│   ├── services/
│   │   └── tmdb.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── CSS globais
│
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Funcionalidades

* 🎬 Exibição de filmes populares
* 🔎 Busca e consulta de filmes através da API do TMDB
* 🖼️ Exibição de pôsteres e informações dos filmes
* ⭐ Avaliações dos filmes
* 🏷️ Gêneros dos filmes
* ⚛️ Componentização com React
* 🔄 Consumo de API
* 🧩 Utilização de React Hooks
* 📱 Interface responsiva

## 🔧 Instalação e Setup

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Passo 1: Clonar o repositório
```bash
git clone https://github.com/jessy-carla/lanmovies.git
cd lanmovies
```

### Passo 2: Instalar dependências
```bash
npm install
```

### Passo 3: Configurar variável de ambiente
1. Crie um arquivo `.env.local` na raiz do projeto
2. Copie o conteúdo de `.env.example`
3. Adicione sua chave de API do TMDB:

```bash
VITE_TMDB_API_KEY=sua_chave_api_aqui
```

**Como obter a chave de API do TMDB:**
1. Acesse [TMDB API](https://www.themoviedb.org/settings/api)
2. Faça login ou crie uma conta
3. Gere uma nova chave de API
4. Copie a chave e adicione ao arquivo `.env.local`

### Passo 4: Executar em desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📦 Scripts disponíveis

```bash
# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Executar linter (ESLint)
npm run lint
```

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

**Configuração:**
- Base URL: `/lanmovies/`
- Output: `docs/`
- Branch: `develop`

Quando você faz push para a branch `develop`, o GitHub Actions automaticamente:
1. Executa o build com Vite
2. Gera os arquivos estáticos na pasta `docs/`
3. Publica a aplicação no GitHub Pages

**Acessar a aplicação publicada:**
[https://jessy-carla.github.io/lanmovies/](https://jessy-carla.github.io/lanmovies/)

## 📚 Principais arquivos

### `src/App.jsx`
Responsável pela tela principal da aplicação e organização dos componentes.

### `src/services/tmdb.js`
Responsável pela integração com a API do TMDB. Expõe funções como:
- `getGenres()` - Busca todos os gêneros
- `getPopularMovies(page)` - Busca filmes populares
- `searchMovies(query, page)` - Busca filmes por nome
- `getMovieDetails(movieId)` - Busca detalhes de um filme

### `src/hooks/useMovies.js`
Hook customizado responsável pela busca e gerenciamento dos filmes, tratamento de loading e erros.

### `src/components/`
Pasta destinada aos componentes visuais e reutilizáveis da aplicação:
- **Navbar** - Barra de navegação com busca
- **Hero** - Seção hero da aplicação
- **MovieCard** - Card com informações do filme
- **CategoryList** - Lista de categorias
- **Ranking** - Ranking de filmes

## 🔐 Segurança

⚠️ **IMPORTANTE:** Nunca commite seu arquivo `.env.local` com a chave de API!

O arquivo `.env.local` está no `.gitignore`, portanto:
- Use `.env.example` como template
- Adicione sua chave apenas no arquivo local
- A chave de API é lida apenas no tempo de build/execução

## 🎓 Objetivo do projeto

O objetivo deste projeto é colocar em prática conhecimentos de:

* React e React Hooks
* JavaScript ES6+
* HTML5 e CSS3
* Consumo de APIs REST
* Componentização
* Organização de projetos Front-End
* Desenvolvimento de interfaces responsivas
* Build tools (Vite)
* Deploy e CI/CD

## 👩‍💻 Desenvolvedora

**Jéssika Carla da Silva**

Desenvolvedora Front-End em formação  
React | JavaScript | UX/UI

## ⭐ Contribuição

Este projeto foi desenvolvido para fins de estudo e aprendizado. Sugestões e melhorias são sempre bem-vindas!

Para contribuir:
1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ por Jéssika Carla**
