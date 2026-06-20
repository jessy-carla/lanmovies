const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || "6591636d50f34c97f274c5e1c3bc7f5b";

let genresCache = null;

export async function getGenres() {
  if (genresCache) {
    return genresCache;
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    return {};
  }

  const data = await response.json();
  genresCache = {};
  
  if (data.genres) {
    data.genres.forEach((genre) => {
      genresCache[genre.id] = genre.name;
    });
  }

  return genresCache;
}

export async function getPopularMovies(page = 1) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes populares.");
  }

  const data = await response.json();
  return data.results || [];
}

export async function searchMovies(query, page = 1) {
  if (!query || query.trim() === "") {
    return [];
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=pt-BR&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes.");
  }

  const data = await response.json();
  return data.results || [];
}

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar detalhes do filme.");
  }

  return await response.json();
}
