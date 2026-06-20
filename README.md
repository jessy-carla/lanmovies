# Lanmovies

Projeto React + Vite para exibir filmes populares usando a API do TMDB.

## Configuração

1. Copie o arquivo `.env` ou crie um novo na raiz do projeto.
2. Adicione sua chave do TMDB:

```env
VITE_TMDB_API_KEY=6591636d50f34c97f274c5e1c3bc7f5b
```

3. Instale dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Estrutura principal

- `src/App.jsx`: tela principal da aplicação
- `src/services/tmdb.js`: integração com a API do TMDB
- `src/hooks/useMovies.js`: hook que busca filmes populares
- `src/components/`: componentes visuais

## Observação

O arquivo `.env` está ignorado pelo Git, então ele não será enviado ao repositório.
